import { products } from "@/data/catalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalogo prodotti DEMO",
  description: "Pannelli, inverter, batterie e wallbox DEMO. Nessun prezzo interno visibile.",
};

export default function ProdottiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-semibold text-navy">Catalogo prodotti</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Marca, modello e caratteristiche. I prezzi cliente escono da preventivo. Costo interno e
        margine non esistono in questo frontend.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <article key={product.code} className="card-3d">
            <p className="text-xs text-amber">
              {product.category} · {product.type}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-navy">
              {product.brand} {product.model}
            </h2>
            <p className="mt-2 text-sm text-muted">{product.short}</p>
            <p className="mt-3 text-xs text-muted">Codice {product.code}</p>
            <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {product.power ? (
                <div>
                  <dt className="text-muted">Potenza</dt>
                  <dd>{product.power}</dd>
                </div>
              ) : null}
              {product.capacity ? (
                <div>
                  <dt className="text-muted">Capacità</dt>
                  <dd>{product.capacity}</dd>
                </div>
              ) : null}
              {product.efficiency ? (
                <div>
                  <dt className="text-muted">Efficienza</dt>
                  <dd>{product.efficiency}</dd>
                </div>
              ) : null}
              {product.warranty ? (
                <div>
                  <dt className="text-muted">Garanzia</dt>
                  <dd>{product.warranty}</dd>
                </div>
              ) : null}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
