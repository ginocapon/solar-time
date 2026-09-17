# Solar Time — Architecture & Development Plan

**Stato:** Fase GitHub-only. Sito pubblico nel repo, **niente Supabase, niente CRM** (nessun dato da inserire).  
**Data:** 17 settembre 2026  
**Fonte comando:** Master Prompt Solar Time + bagaglio operativo Righetto Immobiliare (performance, SEO/GEO, lead, sicurezza) + asset visivo campagna “luna”.

---

## 1. Cosa è stato trovato

### 1.1 Repository GitHub

| Controllo | Esito |
|---|---|
| Cartella workspace `progetti/solar-time` | Quasi vuota (nessun frontend/backend) |
| Repo GitHub `solar-time` | **Non esiste** tra i repo di `ginocapon` |
| Remote della cartella | Non isolato: Git è radicato in `C:\Users\Utente` con remote fittizio `TUO-USER/payload-training-app` |
| Commit | Nessun commit su `main` del workspace |
| Segreti | Nessun `.env` di progetto (corretto) |

**Rischio bloccante:** qualsiasi `git add` fatto dalla home utente traccerebbe Desktop, Documenti, `.ssh`, ecc. Prima di sviluppare va creato un repository **isolato** in `progetti/solar-time`.

### 1.2 Stack attuale

Non c’è framework, non c’è backend, non c’è database, non c’è autenticazione, non ci sono API, CMS, CRM, PDF, email, routing, SEO, CMS o pannello admin.

Esiste solo:

- questo piano;
- `.gitignore`;
- asset campagna `brand/solar-time-hero-luna-bionda.png`.

### 1.3 Patrimonio riusabile (altri progetti, non da copiare)

| Sorgente | Cosa prendere | Cosa NON copiare |
|---|---|---|
| Righetto Immobiliare (`ginocapon/index`) | Gate CWV, SEO on-page, GEO/AEO, form lead in-pagina, RLS, rituale GSC, anti-doppioni, DEMO/consent | Testi, NAP, recensioni, GA4 reali, loghi, HTML/CSS proprietari |
| Compressori Germano | Pattern vetrina+catalogo statico come **limite** (non scala a CRM/preventivi) | Brand Crono Service, testi, immagini, layout |
| Competitor Veneto (solo UX) | Funnel calcolatore → lead; disclaimer “stima ≠ progetto”; sticky tel/WhatsApp; landing locali | Testi, claim, layout, recensioni, brand |

### 1.4 Asset visivo prodotto in questa sessione

Foto adattata dal concept originale:

- ragazza **bionda**;
- hardware **fotovoltaico** (pannelli, inverter/accumulo, furgone servizio);
- brand **Solar Time**;
- claim **LA TUA ENERGIA. IL TUO RISPARMIO. LA TUA INDIPENDENZA.**;
- claim secondari: `L'ENERGIA OVUNQUE ANCHE SULLA LUNA`, `MISSIONE INDIPENDENZA`.

**Uso corretto:** campagna, landing ads, pagina “perché Solar Time”, social.  
**Uso sbagliato come LCP homepage:** file pesante, soggetto pin-up, non ottimale per Core Web Vitals né per un hero istituzionale energy-tech. Homepage: hero tecnico (impianto, tetto, monitoraggio) + CTA; questa foto come visual secondario o landing campagna.

---

## 2. Problemi da risolvere prima del codice applicativo

1. Isolare Git in `progetti/solar-time` e creare repo GitHub (privato consigliato in fase demo).
2. Non usare HTML statico come architettura primaria: va bene per Righetto (vetrina+blog), **non** per CRM + catalogo + preventivi + ruoli.
3. Impostare `DEMO=true` da subito (zero email/SMS/WhatsApp/tracking reali).
4. Dati aziendali in `data/company.ts` (GitHub). Quando arriverà un admin, passeranno a `company_settings`.
5. Costi interni e margini **mai** in API pubbliche o PDF cliente.
6. **Supabase/CRM sospesi** finché non ci sono anagrafiche reali da gestire. I form restano in-pagina e non persistono.

---

## 3. Architettura target

Piattaforma unica, non un sito vetrina + tool staccati.

```
                    ┌──────────────┐
   Visitatori  ───► │  Sito public │  Next.js App Router (SSR/SSG)
   Google/AI   ───► │  SEO / GEO   │  pages, blog, landing, calcolatore
                    └──────┬───────┘
                           │ Public API (anon, rate-limited)
                           ▼
                    ┌──────────────┐
   Staff       ───► │  Admin / CRM │  App autenticata (ruoli)
                    └──────┬───────┘
                           │ Admin API
                           ▼
           ┌───────────────────────────────────┐
           │            Supabase               │
           │  Postgres + Auth + Storage + RLS  │
           │  Edge Functions (email DEMO, PDF) │
           └───────────────────────────────────┘
```

### 3.1 Stack proposto

| Layer | Scelta | Perché |
|---|---|---|
| Frontend pubblico + admin | **Next.js 15 (App Router) + TypeScript** | SEO SSR, Server Components (LCP), API route interne, un solo codebase |
| UI | Tailwind + design tokens propri | Premium energy-tech, non “sito green”; palette navy / bianco / ambra solare, contrasto WCAG AA |
| Backend dati | **Supabase Postgres** | Allineato al prompt e al bagaglio Righetto |
| Auth | Supabase Auth + ruoli in tabella `roles` | RLS per entità |
| Storage | Supabase Storage con URL firmati | Documenti privati non pubblici |
| PDF | Motore server-side (react-pdf o pipeline Node) | Preventivi ST-YYYY-NNNN |
| Email | Edge Function + flag DEMO | Storico sempre; invio reale solo se `DEMO=false` |
| Test | Playwright + Vitest | Ruoli, prezzi, lead, calcolatore |
| Hosting | Vercel o equivalente + progetto Supabase dedicato Solar Time | Isolato da Righetto |

**Perché non static HTML (modello Righetto):** il CRM, i ruoli, il preventivatore e l’import catalogo richiedono un’applicazione. Le **regole di performance Righetto** restano, lo stack cambia.

**Perché non copiare Germano:** HTML+JS+admin.html non copre pipeline commerciale, RLS per ruoli, preventivi versionati, catalogo generico.

---

## 4. Principio commerciale nel prodotto

Non vendere “pannelli”. Ogni pagina pubblica deve spingere un esito:

- risparmio / riduzione prelievi;
- produzione e accumulo;
- autonomia;
- soluzione personalizzata;
- assistenza nel tempo.

**Hero istituzionale**

- H1: LA TUA ENERGIA. IL TUO RISPARMIO. LA TUA INDIPENDENZA.
- Sottotitolo: Progettiamo e realizziamo impianti fotovoltaici, sistemi di accumulo e soluzioni intelligenti per la gestione dell'energia.
- CTA: Calcola il tuo impianto · Richiedi un sopralluogo · Parla con un tecnico

CTA contestuali, mai solo “Contattaci”.

---

## 5. Database — schema logico

Catalogo, CRM e preventivi sono **generici** (estendibili a pompe di calore, wallbox, industriale).

### 5.1 Identità e accesso

`users` · `roles` · `user_roles` · `audit_logs` · `event_logs`

Ruoli: `SUPER_ADMIN` `ADMIN` `COMMERCIALE` `TECNICO` `AMMINISTRAZIONE` `OPERATORE`

### 5.2 Territorio

`provinces` · `municipalities` · `service_areas`

Seed Veneto: Padova, Vicenza, Verona, Treviso, Belluno, Venezia, Rovigo.

### 5.3 CRM

`lead_sources` · `lead_statuses` · `leads` · `customers` · `customer_contacts` · `appointments` · `site_surveys` · `calculator_requests`

Pipeline lead:

`NUOVO` → `DA_CONTATTARE` → `CONTATTATO` → `SOPRALLUOGO` → `SIMULAZIONE` → `PREVENTIVO` → `TRATTATIVA` → `ACCETTATO` → `CONTRATTO` → `INSTALLAZIONE` → `POST_VENDITA`

Ogni lead porta: UTM, pagina, campagna, consenso privacy, consenso marketing, timestamp, `provenienza`.

### 5.4 Catalogo generico

`brands` · `product_categories` · `product_types` · `products` · `product_attributes` (EAV/dinamici) · `product_prices` · `product_images` · `product_documents` · `import_jobs` · `import_logs`

Prezzi: listino, sconto, netto, IVA, trasporto, installazione.  
**`costo_interno` e `margine`:** colonne interne, viste SQL senza questi campi per ruoli non autorizzati, mai nel frontend pubblico.

### 5.5 Preventivi

`quotes` · `quote_items` · `quote_status_history` · `quote_tokens`

Numerazione: `ST-2026-0001` (configurabile).  
Stati: `DRAFT` `SENT` `VIEWED` `WAITING` `ACCEPTED` `REJECTED` `EXPIRED` `CANCELLED`  
Sconto sul preventivo **non** altera il listino catalogo.

### 5.6 Contenuti / SEO

`pages` · `landing_pages` · `blog_posts` · `faq` · `faq_bindings` · `reviews` (flag DEMO) · `projects` · `project_components` · `project_images` · `seo_settings` · `redirects`

### 5.7 Config e documenti

`company_settings` · `settings` · `email_templates` · `email_history` · `documents`

Nessun dato aziendale nel codice.

---

## 6. Sicurezza e RLS

| Superficie | Regola |
|---|---|
| Anon | read contenuti pubblicati; **insert** lead/calculator/contact; niente prezzi interni |
| Autenticato cliente | solo propri preventivi via token |
| Commerciale | lead/clienti/preventivi assegnati; no costi/margini se non previsto |
| Admin | catalogo, CMS, utenti secondo ruolo |
| Storage | bucket pubblici solo media sito; documenti con signed URL |
| Email | in DEMO nessun relay reale; rate limit + destinatario allowlist quando live |
| Admin UI | `noindex`, fuori sitemap, 2FA in fase successiva |
| Segreti | solo env / secret manager; mai `service_role` nel client |

Validazione input, MIME upload, limiti size, honeypot form, audit su prezzi/preventivi/utenti.

GDPR: consensi separati, timestamp, informative; **non** dichiarare conformità automatica.

---

## 7. API

### Public

`GET /api/public/products` (senza costi)  
`GET /api/public/projects`  
`GET /api/public/blog`  
`POST /api/public/leads`  
`POST /api/public/calculator`  
`GET /api/public/quote/:token`

### Admin (auth + ruolo)

CRUD catalogo, CRM, quotes, PDF, email DEMO, import CSV/XLSX, CMS, settings.

### Interni

Calcolo prezzi preventivo, numerazione, transizioni stato, audit.

---

## 8. Frontend — struttura

```
app/
  (public)/
    page.tsx                          homepage 17 sezioni
    fotovoltaico/...                  servizi
    prodotti/...                      catalogo
    progetti/...
    blog/...
    fotovoltaico-[provincia]/...      GEO locale (contenuto unico)
    calcola/                          calcolatore
    preventivo/[token]/
    chi-siamo / contatti / legal
  (admin)/
    dashboard / crm / catalogo / quotes / cms / settings
```

Componenti riutilizzabili: `Hero`, `StickyMobileCta`, `LeadForm`, `Calculator`, `ProductCard`, `QuoteBuilder`, `FaqBlock`, `JsonLd`, `SeoHead`.

Header: Fotovoltaico · Soluzioni · Prodotti · Progetti · Aziende · Blog · Chi siamo · Contatti + CTA Calcola.  
Mobile: hamburger + telefono + WhatsApp + sticky bar.

---

## 9. Calcolatore

Input: comune, provincia, immobile, consumi, tetto, ombre, PdC, auto/wallbox, piscina, obiettivo.  
Output etichettato **STIMA PRELIMINARE** (mai progetto definitivo): kWp, n. pannelli, producibilità, autoconsumo, immissione, kWh accumulo indicativi.  
CTA: Richiedi simulazione → lead CRM con `source=calculator`.  
Motore: formule versionate + fattori provinciali seed (irraggiamento indicativo, non PVGIS live in Fase 1). Nessun claim numerico non verificato sul sito marketing.

---

## 10. SEO / GEO — porting Righetto (senza copiare il sito)

Regole che **hanno performato** e diventano gate Solar Time:

### Performance / CWV

- LCP < 2,5s (target < 2s): preload hero + font; **no lazy** sull’LCP
- INP < 200ms; CLS < 0,1 con width/height espliciti
- WebP/AVIF; hero campagna compresso; niente animazioni blur / `will-change` permanente
- CSS critico; JS non essenziale deferred
- Vendor in repo, non CDN random
- Asset con hash o `?v=` in build

### On-page

- Title unico ≤60 caratteri; meta 120–155; H1 unico distinto dal title
- Canonical pulite, sitemap, robots (Allow bot AI utili; Disallow admin)
- FAQ visibili = FAQ JSON-LD (niente schema falso)
- Organization / LocalBusiness / Service / Product / Breadcrumb / Article / FAQPage
- NAP demo coerente ovunque, sostituibile da `company_settings`

### GEO / AEO (AI search)

- Prime 2 frasi dichiarative: chi è, cosa fa, dove opera
- H2 domanda + risposta 40–60 parole
- Box “In sintesi” sugli articoli
- `llms.txt` + `ai.json` per assistenti non-Google; per Google vale SEO standard, non farm di citazioni
- Pagine locali **uniche** (territorio, tipologie tetto, domande locali, progetti). Vietato duplicare cambiando solo il Comune

### Contenuti

- Anti-doppioni prima di scrivere
- Refresh (SOSTENERE) prima di nuovi articoli (AGGIUNGERE)
- Dati numerici solo con fonte; zero recensioni inventate (solo DEMO etichettate)
- CTA contestuale in pagina, form **in pagina** (mai redirect a Contatti per inviare)
- Successo inline; GDPR obbligatorio; campo `provenienza` = slug

### Operativo post-go-live (rituale Righetto adattato)

- Venerdì: GSC 15 min + 1 modifica concreta
- Probe URL live
- Gate: validate title/meta, schema, Lighthouse su homepage + 2 template
- Security check 2× settimana
- Email report solo quando tracking DEMO è sostituito da ID reali

---

## 11. Funnel

Visitatore → contenuto/ads → landing → **calcolatore** → richiesta → lead → contatto → sopralluogo → simulazione → preventivo → trattativa → accettazione → installazione → monitoraggio → assistenza → recensione DEMO/referenza.

Il CRM deve mostrare lo stesso percorso. Automazioni: predisposte, **non attive** in DEMO.

---

## 12. Design system

Energy-tech, non “foglia verde”.

- Navy profondo, bianco, ambra solare per CTA (contrasto ≥ 4,5:1 — mai ambra + testo bianco se fallisce WCAG)
- Tipografia precisa, griglia, foto impianti reali + 1 visual campagna luna
- Logo/favicon sostituibili da admin
- Responsive: 375 / 768 / 1366 / 1440 / 1920 / 2560

---

## 13. Competitor — insight UX originale (non copia)

| Pattern osservato | Cosa fare meglio |
|---|---|
| Calcolatore come porta d’ingresso | Calcolatore in homepage sezione 2, non sepolto |
| “La stima non è il progetto” | Disclaimer visibile + CTA simulazione |
| Preventivo = form lungo | Form corto + CRM che completa i dati |
| Poche prove locali | `/progetti` + landing provinciali con casi DEMO chiari |
| Catalogo assente o PDF | Catalogo vero, filtrabile, gestito da admin |
| CRM esterno | CRM nativo + preventivo + PDF + storico email |

Nomi competitor restano solo riferimento di mercato. Zero testi/immagini/claim copiati.

---

## 14. Piano di sviluppo (ordine vincolante)

Non costruire tutto insieme. Ogni fase: implementare → testare → correggere → spiegare → poi avanzare.

| Fase | Deliverable | Esce se |
|---|---|---|
| 0 | Repo GitHub isolato, env example, DEMO=true, company_settings seed | Git non è più la home utente |
| 1 | Analisi congelata (questo documento) | Approvazione |
| 2 | Schema Supabase + RLS | `check_rls` anon non legge privati |
| 3 | Auth + ruoli | Commerciale ≠ Admin |
| 4 | Admin shell | Login, menu, audit login |
| 5 | Catalogo + import CSV anteprima | Prezzi interni nascosti al public |
| 6 | CRM lead/clienti/pipeline | Form pubblico crea lead |
| 7 | Preventivatore + numerazione | Sconto non tocca listino |
| 8 | PDF | Layout brand, no margini |
| 9 | Email DEMO | Riga in `email_history`, zero SMTP reale |
| 10 | Sito pubblico + header/footer/homepage | Lighthouse base |
| 11 | Calcolatore → lead | Disclaimer stima |
| 12 | Progetti | SEO locale |
| 13 | Blog + FAQ | AEO box + schema |
| 14 | Landing provinciali + llms.txt | Contenuto unico |
| 15 | Analytics DEMO events | Nessun ID reale |
| 16 | Performance pass | LCP/CLS/INP |
| 17 | Security audit | RLS + upload + admin |
| 18 | Test E2E elenco prompt §55 | Tutti verdi |
| 19 | Deploy staging | DEMO ancora on |

Seed DEMO: 10 clienti, 20 lead, 30 prodotti, 5 brand, 10 progetti, 10 preventivi, 20 articoli, 20 FAQ — tutti etichettati DEMO.

---

## 15. Milestone consigliate

1. **Foundation:** fasi 0–4  
2. **Motore commerciale:** fasi 5–9  
3. **Acquisizione:** fasi 10–14  
4. **Produzione:** fasi 15–19  

Dopo ogni milestone: demo navigabile + elenco residui.

---

## 16. Rischi

| Rischio | Mitigazione |
|---|---|
| Scope enorme | Fasi bloccanti, niente “tutto insieme” |
| Git home directory | Repo isolato obbligatorio Fase 0 |
| Foto campagna pesante | Non usarla come LCP; WebP ricodificato |
| Claim energetici | Solo stima, fonti, niente numeri inventati |
| Cross-contaminazione Righetto | Progetto Supabase/GA4/domain nuovi |
| Email accidentali | DEMO default true, fail-closed |

---

## 17. Decisione richiesta

Per partire con il codice serve approvazione esplicita di:

1. Stack **Next.js 15 + TypeScript + Supabase**
2. Creazione **repo GitHub isolato** `solar-time` (privato)
3. Foto luna = **asset campagna**, non hero LCP della homepage
4. Inizio da **Fase 0 + Fase 2** (repo + database), non dal sito vetrina

Quando approvi, lo sviluppo segue questo piano senza riscrivere ciò che verrà già testato.
