export const provinceYield: Record<string, number> = {
  PD: 1250,
  VI: 1230,
  VR: 1280,
  TV: 1220,
  BL: 1100,
  VE: 1240,
  RO: 1260,
};

export type CalculatorProfile = "civile" | "capannone" | "terra";

export type CalculatorInput = {
  profile: CalculatorProfile;
  province: string;
  annualKwh: number;
  monthlyBill: number;
  roofM2: number;
  orientation: "sud" | "sud-est" | "sud-ovest" | "est" | "ovest";
  tilt: number;
  shading: "nessuno" | "parziale" | "elevato";
  heatPump: boolean;
  ev: boolean;
  pool: boolean;
  wantStorage: boolean;
};

export type CalculatorResult = {
  kwp: number;
  panels: number;
  yearlyKwh: number;
  selfConsumption: number;
  exported: number;
  storageKwh: number | null;
  gridReduction: number;
};

const orientationFactor: Record<CalculatorInput["orientation"], number> = {
  sud: 1,
  "sud-est": 0.96,
  "sud-ovest": 0.96,
  est: 0.88,
  ovest: 0.88,
};

const shadingFactor: Record<CalculatorInput["shading"], number> = {
  nessuno: 1,
  parziale: 0.9,
  elevato: 0.75,
};

export function estimate(input: CalculatorInput): CalculatorResult {
  const extra =
    (input.heatPump ? 1800 : 0) + (input.ev ? 2200 : 0) + (input.pool ? 1500 : 0);
  const demand = Math.max(input.annualKwh, input.monthlyBill * 12 * 3.2) + extra;
  const yieldKwh =
    (provinceYield[input.province] ?? 1230) *
    orientationFactor[input.orientation] *
    shadingFactor[input.shading] *
    (input.tilt >= 20 && input.tilt <= 35 ? 1 : 0.94);
  const roofCap = input.roofM2 > 0 ? (input.roofM2 / 5.5) * 0.44 : 12;
  const maxKwp = input.profile === "terra" ? 2500 : input.profile === "capannone" ? 500 : 24;
  const minKwp = input.profile === "terra" ? 20 : input.profile === "capannone" ? 12 : 2.2;
  const kwp = Math.min(Math.max(demand / yieldKwh, minKwp), roofCap, maxKwp);
  const panels = Math.max(6, Math.round((kwp * 1000) / 440));
  const yearlyKwh = kwp * yieldKwh;
  const baseSelf =
    input.profile === "terra" ? 0.18 : input.profile === "capannone" ? (input.wantStorage ? 0.55 : 0.62) : input.wantStorage ? 0.68 : 0.38;
  const selfConsumption = Math.min(demand, yearlyKwh * baseSelf);
  const exported = Math.max(0, yearlyKwh - selfConsumption);
  const storageKwh = input.wantStorage
    ? Math.min(
        input.profile === "civile" ? 15 : input.profile === "capannone" ? 80 : 200,
        Math.max(5, Math.round((demand * 0.35) / 365) * 2 + (input.ev ? 5 : 0)),
      )
    : null;
  const gridReduction = Math.min(85, Math.round((selfConsumption / demand) * 100));

  return {
    kwp: Math.round(kwp * 10) / 10,
    panels,
    yearlyKwh: Math.round(yearlyKwh),
    selfConsumption: Math.round(selfConsumption),
    exported: Math.round(exported),
    storageKwh,
    gridReduction,
  };
}
