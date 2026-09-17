import { Calculator } from "@/components/Calculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calcolo impianto (indicativo)",
  description:
    "Calcolo indicativo di potenza per tetto, capannone o campo a terra. Non è un progetto. Solar Time DEMO.",
};

export default function CalcolaPage() {
  return <Calculator />;
}
