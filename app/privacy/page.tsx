import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-4xl font-semibold text-navy">Privacy</h1>
      <p className="mt-4 text-muted">
        Testo DEMO. Non costituisce informativa GDPR valida. Prima della pubblicazione va verificato con
        un professionista. I form attuali non inviano dati a un server.
      </p>
    </article>
  );
}
