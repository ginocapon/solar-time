# Solar Time

Piattaforma DEMO per impianti fotovoltaici: sito pubblico, catalogo, calcolatore, guide. Tutti i dati aziendali sono fittizi.

**In questa fase non c'è Supabase e non c'è CRM.** I contenuti stanno nel repository GitHub (`data/`). I form non inviano email.

## Avvio locale

```bash
npm install
copy .env.example .env.local
npm run dev
```

Apri `http://localhost:3000`.

## Cosa c'è

- Homepage con hero, calcolatore, soluzioni, progetti DEMO, FAQ
- Pagine servizi e landing provinciali Veneto
- Catalogo senza prezzi interni
- Calcolatore: stima preliminare, nessun salvataggio lead
- Visual campagna: `/campagna`

## Cosa non c'è (volutamente)

- Database
- Autenticazione
- Pipeline commerciale
- Preventivi / PDF
- Invio email, SMS, WhatsApp reali
- Tracking reale (`robots` del sito è noindex finché è DEMO)

Piano: `docs/ARCHITECTURE-AND-DEVELOPMENT-PLAN.md`
