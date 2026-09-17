import { Calculator } from "@/components/Calculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calcola il tuo impianto",
  description:
    "Stima preliminare di potenza, pannelli e accumulo. Non è un progetto definitivo. Solar Time DEMO.",
};

export default function CalcolaPage() {
  return <Calculator />;
}
