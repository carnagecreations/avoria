# AVORIA — Full Site Blueprint
### Prepared by the assembled team · v2.0 (full copy rewrite)

**The verdict, agreed by all ten of us:** the current copy is pointed in the right direction — ownership, flat pricing, the approve-before-you-pay guarantee — but it's a first draft of the right idea, and the visuals are the generic dark template the brief warns against. v2 replaces **100% of the visual identity** and gives **every line of text a rewrite pass**. Client quotes are the only copy kept verbatim (real words are never rewritten).

**The three copy upgrades that drive everything below:**
1. **The guarantee becomes the headline.** "You don't pay until you approve the draft" is the single strongest sentence on the site, and it was buried in section five. It's now the homepage H1.
2. **First person, everywhere.** The site promises "you talk to the person who builds it" and then says "we" and "our team." One person, one voice: *I build it, you own it.* (Ann's call, unanimous.)
3. **Every claim carries a number or a concrete noun.** No sentence survives on vibes. "Fast" becomes "1.4 seconds." "Affordable" becomes "hundreds, not thousands."

---

## Part 1 — Team memos

**Claire Bahn (brand strategy):** Avoria's three lives — developer, rescue director, vet tech — are currently hidden behind a Ctrl+V easter egg. That's the most differentiating asset the brand has. The rescue is the proof of character that makes a stranger in Yuma trust you with their business. It gets a named paragraph on About, a rewritten service description, and its own content pillar. The through-line: *software built by someone whose systems have to work, because sometimes something living depends on it.*

**Sahil Gandhi (visual identity):** Kill the dark mode. Dark + neon gradients reads "crypto startup"; your clients are contractors, salons, restaurants, rescues. The new identity is **Desert Editorial**: warm paper, near-black ink, one venomous green accent, oversized serif headlines, hairline rules, generous air. A beautifully typeset field guide, not a SaaS landing page. Nothing in the local market — or the dev-portfolio world — looks like this.

**Brittany Chiang (developer credibility):** Craft shows in precision, never glow. Replace the mouse-follow blob and sparkle emoji with monospace numbers, real screenshots at large sizes, and a site that itself scores 100 — then print that score in the footer.

**Gill Andrews (conversion):** Lead with the offer, not the category. Every page ends at the same door (the free call), the phone number is everywhere (Yuma is a call-and-text town), the form drops "Company" and adds quick-pick chips, and the ROI slider moves to the homepage where the comparison argument actually happens.

**Rand Fishkin (SEO):** The site targets nothing, so it ranks for nothing. Geo-anchored titles ("Yuma, AZ"), LocalBusiness + FAQPage schema, and Notes becomes a four-pillar strategy — including the nonprofit-tech niche nobody else owns. Part 4.

**Ann Handley (voice):** Voice rules — first person singular, plain words, one idea per sentence, numbers over adjectives. Banned: "solutions," "elevate," "visionary," "thought leadership," "unleash." Every hero on the inner pages was rewritten under these rules.

**Bhavik Sarkhedi (narrative):** The site's arc in one sentence: *"I watched Yuma businesses get overcharged for websites they'd never own, so I built the opposite — and I run a rescue, so I don't ship things that break."* Home states it, About proves it, Work evidences it, Notes teaches it, Contact closes it.

**Kurogo (thought leadership):** Insights → **Notes**. Bylined, dated, written like a person who builds, not an agency that markets.

**SAOBANIAN (positioning, verbatim for metadata and pitches):** *"Avoria builds hand-coded websites and custom apps that clients own outright — one flat price, and no invoice until the draft is approved. Yuma, AZ."*

**Timothy Ricks (execution):** Stack stays (Next.js on Cloudflare Pages). Static-first, self-hosted fonts, zero layout shift, `prefers-reduced-motion` respected, animations ≤400ms opacity/transform only. Build order in Part 5.

---

## Part 2 — Design system: "Desert Editorial"

### 2.1 Color (replaces the entire current palette)

| Token | Hex | Use |
|---|---|---|
| `paper` | `#F7F4ED` | Page background (warm bone) |
| `paper-deep` | `#EFEAE0` | Alternate bands, form fields, cards |
| `ink` | `#1B1813` | Headlines, footer/guarantee bg |
| `ink-soft` | `#57534A` | Body text |
| `ink-faint` | `#8A857A` | Metadata, captions |
| `viper` | `#3F6212` | The accent: links, labels, ✓ marks, active states |
| `venom` | `#D4F70F` | Electric highlight — tiny and rare: CTA hover, one underline per page, the live dot |
| `clay` | `#B4531F` | ✕ marks, the "rent" column, warnings |
| `line` | `#DDD6C8` | Hairline rules and borders |

Dark sections invert (`ink` bg, `paper` text, `venom` accent) — maximum two per page: the guarantee band and the footer. No gradients anywhere, ever.

### 2.2 Typography

- **Display: Fraunces** (keep — best thing on the current site). Weights 500/600, italics for the one emphasized phrase per headline, letter-spacing −0.02em above 40px.
- **Body: Inter** (keep), 17px/1.65, `ink-soft`.
- **Mono: JetBrains Mono** (add) — all numbers, stats, overlines, nav items, section indices, metadata. The "developer's field notes" texture.
- Scale: hero `clamp(3rem, 9vw, 7.5rem)`; H2 `clamp(2rem, 5vw, 3.5rem)`; overlines 12px mono uppercase, tracking 0.2em, `viper`.

### 2.3 Layout & texture

- Max width 1200px, 12-col grid. Sections separated by full-width 1px `line` rules — broadsheet, not floating cards.
- **No rounded glass cards.** Content sits on paper, divided by hairlines. Where a container is needed: 1px `line` border, square corners, `paper-deep` fill.
- Film grain stays, re-tinted for light (opacity 0.04). One signature graphic: a fine topographic/scale-pattern line drawing in `line`, ~5% visible, anchored to hero corners.
- Buttons: square-cornered, mono uppercase. Primary: `ink` bg → hover `viper` bg with `venom` text. Secondary: 1px `ink` border, transparent.

### 2.4 Motion

Fade + ≤16px translate only, 300–400ms, 80ms stagger, `once: true`, full reduced-motion support. **Delete:** mouse-follow blob, sparkle burst, logo click-counter alert, gradient scrollbar (go native). The Work-page secret project stays, re-skinned in `clay`.

---

## Part 3 — Page-by-page: every section, every line (final copy)

> `[mono]` = JetBrains Mono. `*phrase*` = Fraunces italic with a single `venom` underline stroke.

### 3.0 Navigation (all pages)

- Left: **AVORIA** [mono, tracked wide]
- Center [mono 13px]: `Work` · `Services` · `Notes` · `About`
- Right: `(928) 916-3711` [mono, `ink-faint`, hidden on mobile] + **Book a free call**
- Scrolled: `paper/90` blur + bottom hairline. Mobile: full-screen `ink` overlay, `paper` links in Fraunces 40px.

### 3.1 Home `/`

**Metadata:** title `Avoria — Web Design & Custom Apps in Yuma, AZ | Pay After You Approve` · description `Hand-coded websites and custom apps for Yuma businesses. One flat price, no subscriptions — and no invoice until you've approved a working draft.` · LocalBusiness + FAQPage schema.

**§1 Hero**
- [mono, `viper`, `venom` dot]: `● TAKING NEW PROJECTS — YUMA, AZ`
- H1: `First you see it.` / `*Then* you pay for it.`
- Sub: `I hand-code websites and custom apps for Yuma businesses. You get a working draft in days, one flat price, zero subscriptions — and the invoice doesn't exist until you approve the draft.`
- CTAs: **Book a free call** · `See the work →`
- Proof strip [mono]: `5.0★ GOOGLE RATING · 50+ CLIENTS · 0 REFUNDS EVER REQUESTED · REPLIES < 3 HRS`

**§2 Selected work** — three large screenshots (16:10, hairline border; hover = `ink` caption bar slides up).
- Overline: `SELECTED WORK` · H2: `Three builds. Three sets of *receipts*.`
- Cards (title / [mono] result):
  1. `Montijo` — `LIVE IN 6 DAYS · REPLACED A $1,800 QUOTE`
  2. `Brennan's` — `95+ LIGHTHOUSE · LEADS IN WEEK ONE`
  3. `Beauties of the Beasts` — `LIGHTHOUSE 52→97 · LOAD 6.2s→1.4s`
- Link: `All case studies →`

**§3 Own vs. rent** — two square columns on `paper-deep`.
- Overline: `THE MATH` · H2: `Renting a website is the most expensive way to have one.`
- Sub: `The builder ad says $23 a month. The math says four figures every three years, forever — for a template your competitors are also using.`
- Left — `THE PLATFORM SUBSCRIPTION` [`clay` ✕]: `$828–$2,340+` / `every 3 years, forever ($23–$65/mo)`
  - `A template thousands of other sites already use`
  - `Slow loads and an SEO ceiling you can't fix`
  - `Miss a payment — your site goes dark`
  - `Their platform, their rules, their price hikes`
- Right — `THE AVORIA BUILD` [`viper` ✓, `venom` top rule]: `One flat price` / `then ~$11/year for the domain. That's it.`
  - `Hand-coded for your business — one of one`
  - `95+ Lighthouse scores, SEO built in — not bolted on`
  - `$0/month hosting on modern infrastructure`
  - `Every line of code yours, permanently`
- **ROI slider** (moved here from Services): heading `Do your own math.` · label `Drag to your current monthly bill` · outputs `[mono, clay] $X,XXX OVER 3 YEARS` vs `[mono, viper] AVORIA AFTER LAUNCH: $0/MO`.

**§4 Process** — numbered hairline rows, `[mono] 01` + title + body.
- Overline: `HOW IT WORKS` · H2: `First call to launch in about a *week*.`
- `01 — The call` · `Fifteen minutes, free, no pitch. You describe what you need; you leave with a clear scope and one flat number. If it's not a fit, you'll hear that too.`
- `02 — The draft` · `Within days — not months — you get a link to a working draft. Real pages, your actual content, live on a preview you can click through on your phone.`
- `03 — The approval` (`venom` left rule) · `You review, I refine. And here's the part no agency will match: until you approve the draft, there is no invoice. Not even a deposit.`
- `04 — The handoff` · `Launch day, everything transfers to you — code, design, domain, content. No hostage domains, no monthly platform bill. If we never speak again, your site keeps working.`

**§5 Guarantee band** — full-bleed `ink` inversion, near-hero Fraunces in `paper`:
- Overline [`venom`]: `THE GUARANTEE`
- H2: `If the draft isn't right, you owe *nothing*.`
- Sub: `The work carries the risk — not you. Across 50+ clients, no one has ever walked away from a draft, and no one has ever asked for a refund.`

**§6 Testimonials + stats**
- Overline: `CLIENT WORDS` · H2: `Nobody was paid to say this.`
- Quote 1 (verbatim — real client words are never rewritten): `"I'd been putting off a website for two years because of the price… now I have something better than anything my competitors have. No subscription. No platform. Done."` — `T. NGUYEN · SERVICE BUSINESS OWNER`
- Quote 2 (verbatim): `"I needed a booking app for my salon and got quoted $8,000 by an agency. I got exactly what I needed for a fraction of that… my no-show rate dropped immediately."` — `L. CASTILLO · SALON OWNER`
- Stat row [mono]: `50+ HAPPY CLIENTS · 5.0★ AVERAGE RATING · <3HR AVG. RESPONSE · 0 REFUNDS REQUESTED`

**§7 FAQ** — left column: overline `QUESTIONS` · H2 `Everything people ask before booking.` · sub `Anything else — call or text. You'll hear back within hours, from the person who builds the work.` · phone link. Accordion `+` in `viper`. Rewritten answers:
- `What does a project cost?` → `One flat number, quoted up front from your scope — and it doesn't change. No retainers, no subscriptions, no surprise line items. Hosting runs on free-tier infrastructure, so after launch your only recurring cost is the domain: about $11 a year.`
- `How fast will my site be live?` → `Most websites go from first call to live in about a week: a working draft in days, one round of refinement, then launch. Custom apps usually take one to two weeks.`
- `Do I actually own it?` → `Completely. Code, design, domain, content — all transferred to you at launch. If you ever want to work with someone else, you take everything and go. That's the whole point.`
- `What if something breaks later?` → `Every project includes a post-launch support window, and existing clients get priority response after that — replies average under three hours. No support contract, no hourly meter running.`
- `Why not just use Squarespace or Wix?` → `A builder runs $23–$65 a month forever — $800 to $2,300+ every three years for a template your competitors also use. A hand-coded site costs once, loads faster, ranks better, and never bills you again.`

**§8 Final CTA**
- H2: `The call costs nothing. The draft costs nothing until you approve it. The only risk is *keeping the site you have*.`
- **Book a free call** · `Or call/text (928) 916-3711`
- [mono, `ink-faint`]: `REPLIES IN UNDER 3 HOURS, FROM THE PERSON WHO BUILDS THE WORK.`

### 3.2 Services `/services`

**Metadata:** `Services — Web Design, Custom Apps & SEO in Yuma, AZ | Avoria`

**Hero:** overline `SERVICES` · H1 `Six ways in. Everything ships the same way: *yours*.` · sub `Every engagement is hand-coded, priced once, and owned by you the day it launches.`

**Service rows — not accordions** (hiding services behind clicks costs conversions — Gill). Full-width hairline rows: `[mono] index + name` left; description + always-visible details right.

1. `01 — Custom web design & development` · `A site built line by line for your business — no template underneath, no page builder, no monthly ransom.`
   - `Hand-coded — no builders, no bloat` · `SEO and schema markup engineered in from day one` · `Mobile-first, 95+ Lighthouse targets` · `Full code ownership at launch` · `One clear revision round before going live` · `$0/month hosting on modern infrastructure`
2. `02 — Custom web applications` · `The tool you keep wishing existed — booking systems, client portals, quote calculators — built around how you actually work.`
   - `Booking & scheduling tools` · `Client portals & dashboards` · `Quote calculators & intake forms` · `Shaped to your exact workflow, not a template's` · `One-time cost — no per-seat, no per-month` · `Most apps ship in 1–2 weeks`
3. `03 — Performance & technical SEO` · `Your site is slow, and Google knows it. This fixes both.`
   - `Full technical SEO audit with a prioritized fix list` · `Core Web Vitals optimization` · `Lighthouse scores into the 90s` · `Structured data & schema implementation` · `Site speed re-engineering` · `Ongoing monitoring available — never required`
4. `04 — Migrations & replatforming` · `Escape WordPress or a page builder without losing your content, your rankings, or a day of uptime.`
   - `WordPress/Divi to modern stack` · `Zero-downtime cutover planning` · `Content and SEO preserved through the move` · `Hosting cost reduction — often to $0/mo` · `Legacy system audit before anything moves` · `Full documentation handed off with the keys`
5. `05 — Nonprofit & mission-driven technology` · `Real software for organizations doing real work — built by someone who runs one. I direct a reptile rescue, so shelter intake systems and volunteer tools aren't guesses here. They're lived requirements.`
   - `Shelter & rescue management systems` · `Volunteer & intake tracking` · `Donor & adoption-applicant workflows` · `Priced for real nonprofit budgets` · `Role-based access & compliance reporting` · `Ongoing support for mission-critical tools`
6. `06 — Ongoing strategy & support` · `Help after launch when you want it — never a contract because you're trapped.`
   - `Post-launch support window on every project` · `Content & copy updates` · `Analytics setup & plain-English reviews` · `Priority response for existing clients` · `Roadmap planning for new features` · `No long-term contract, ever`

**Pricing block** (new — replaces "Custom" price tags): H2 `What it costs.` · `Every project gets one flat number, quoted up front from your scope. Simple sites land in the hundreds — not thousands. Apps are quoted the same way: once. And because the invoice doesn't exist until you've approved the draft, the quote is the ceiling — not the opening bid.`

**CTA:** `Get your number. *The call is free*.` → **Book a free call** + phone.

### 3.3 Work `/work`

**Metadata:** `Work — Real Sites, Real Numbers | Avoria, Yuma AZ`

**Hero:** overline `SELECTED WORK` · H1 `The work, with *numbers attached*.` · sub `No "increased brand engagement" here. Launch timelines, Lighthouse scores, and what each client stopped paying.`

Filters (`All / Web Design / Web Apps / Performance`) as mono text-links, `venom` underline on active.

**Project rows** (keep the editorial stacked layout; re-skin) — rewritten descriptions:
1. `Montijo — Service Business Website` · `LIVE IN 6 DAYS · $0/MO HOSTING` · `An agency quoted $1,800. This site went live in six days for a fraction of it — fast, professional, and owned outright by the client.`
2. `Brennan's — Local Business Website` · `95+ LIGHTHOUSE · LEADS IN WEEK 1` · `A conversion-ready local business site — gallery, contact form, 95+ Lighthouse — pulling real leads within its first week live.`
3. `Rescue Website Rebuild — Beauties of the Beasts` · `LIGHTHOUSE 52→97 · LOAD 6.2s→1.4s` · `A WordPress/Divi site that took 6.2 seconds to load, rebuilt on a modern stack: Lighthouse 52 to 97, load time to 1.4 seconds, hosting bill from ~$25/mo to $0.`
4. `Salon Booking App` · `NO-SHOW RATE DROPPED IMMEDIATELY` · `An agency quoted $8,000. The salon got a booking app shaped to its actual workflow for a fraction of that — and no-shows dropped the first week it ran.`
   - Placeholder tile (no screenshot): `paper-deep` + [mono] `PRIVATE BUILD — SHOWN ON REQUEST`

Secret project (Ctrl+V) stays, re-skinned in `clay`; description: `The project behind the projects. A reptile rescue that proved organizations need real software, not spreadsheets held together with hope — the lesson every build here inherits.`

**CTA:** `Your business could be the next row on this page.` → **Start your project**.

### 3.4 Notes `/insights` (renamed; URL can stay)

**Metadata:** `Notes — Straight Answers on Websites, Pricing & Ownership | Avoria`

**Hero:** overline `NOTES` · H1 `Straight answers about *websites*.` · sub `What things really cost, why sites are slow, and when you've outgrown the off-the-shelf tool — from the person who builds the fixes.`

**Article list** — hairline rows: date [mono] · category [mono `viper`] · Fraunces title · excerpt · read time. Rewritten excerpts:
1. `What a $295 Website Taught Me About Agency Pricing` — `Most small-business sites are priced like subscriptions because that's what keeps agencies fed. Here's the honest cost breakdown.`
2. `The Real Cost of Squarespace Over 3 Years` — `$23 a month sounds harmless. Multiply it out, add the template ceiling, and it's the most expensive "cheap" option there is.`
3. `From Lighthouse 52 to 97: A Migration Case Study` — `A real migration, step by step: what moved, what got deleted, and where the 4.8 seconds went.`
4. `Why Nonprofits Get Left Behind on Software` — `Rescues run on spreadsheets and prayer because nobody builds for them. I run one. Here's what actually works.`
5. `Custom App or Off-the-Shelf Tool: How to Decide` — `Calendly is great until it isn't. Three signs you've outgrown the generic tool.`
6. `What Hand-Coding Actually Buys You` — `"Hand-coded" isn't nostalgia. It's the difference between owning an asset and renting a layout.`

**Newsletter** (moved below the articles): H3 `One useful note a month.` · `What I'm learning building sites and software — no funnels, no spam. Unsubscribe anytime.` · button `Subscribe` · success `✓ You're in. First note lands next month.`

**Closing CTA:** `Reading is free. *So is the call*.` → **Book a free call**.

### 3.5 About `/about` — first person throughout

**Metadata:** `About — Shiann Bowman | Avoria, Yuma AZ`

**Hero:** overline `ABOUT` · H1 `One person. *All in*.` · sub `No account managers. No juniors. The person you talk to is the person who builds it.`

**§ The story** — plain prose, three paragraphs:
1. `Avoria started with a pattern I couldn't unsee: small businesses in Yuma getting quoted $2,000 to $8,000 for websites that shouldn't cost anywhere near that — then locked into monthly platform fees on top of it, forever.`
2. `So I built the opposite. Every site I ship is hand-coded, with no template platform underneath it. Every project is priced once, with nothing recurring after launch. And the code belongs to the client from day one — no lock-in, no ransom to leave.`
3. `The standard comes from an unusual place. I also direct Beauties of the Beasts, a reptile rescue that has rehomed more than 300 animals, and I work as a vet tech. When an intake system fails at a rescue, an animal pays for it. I stopped being able to ship software that fails quietly — and that carried into every client build.`

**§ Principles** (drop emoji icons → [mono] indices):
- `01 — You own what you pay for` · `Code, design, domain — transferred to you at launch, no strings attached.`
- `02 — One number, no surprises` · `Scope and price agreed before work starts. The quote is the ceiling.`
- `03 — Hand-coded on purpose` · `No Wix, no Squarespace, no builders. Every line exists for a reason.`
- `04 — Built to outlast me` · `Fast, accessible, documented — your site keeps working even if we never speak again.`

**§ The journey** — single vertical hairline, [mono] labels:
- `THE PROBLEM` · `Watched Yuma businesses get quoted $2,000–$8,000, plus retainer lock-in, for sites that should cost a fraction of that.`
- `THE BUILD` · `Started hand-coding sites and apps instead — full ownership, one flat price, no recurring bill.`
- `THE PROOF` · `A rescue site rebuilt from Lighthouse 52 to 97. A salon booking app for a fraction of an $8,000 quote. Real numbers, on the Work page.`
- `THE LESSON` · `Running a rescue taught me organizations need real software — not spreadsheets held together with hope.`
- `TODAY` · `50+ clients, a 5.0 average rating, zero refunds — because it's built right the first time.`

**§ The person** (replaces "The Visionary Behind Avoria"): square-cropped photo, `line` border · H2 `The person behind Avoria.` · `Shiann Bowman` · [mono] `WEB DEVELOPER · RESCUE DIRECTOR · VET TECH` · `Shiann builds hand-coded sites and custom applications for businesses tired of paying rent on their own website — and directs Beauties of the Beasts, a reptile rescue nonprofit that has rehomed 300+ animals in Yuma, AZ.`

**CTA:** `Let's build something that *outlasts the invoice*.` → **Start the conversation**.

### 3.6 Contact `/contact`

**Metadata:** `Book a Free Call — Avoria | Web Design Yuma, AZ`

**Hero:** overline `CONTACT` · H1 `Book your *free call*.` · sub `Fifteen no-pressure minutes about what you need. You leave with a clear scope and a flat price — whether you build with me or not.`

**Form (left, `paper-deep`, square fields, `viper` focus ring):**
- `Name` · `Email`
- `What do you need?` — chip toggles [mono]: `A NEW WEBSITE` / `A CUSTOM APP` / `A FASTER SITE` / `SOMETHING ELSE`
- `Tell me about it` — textarea, placeholder `What are you building, replacing, or escaping?`
- Button: **Send it** · success (no sparkles): `✓ Got it. You'll hear back within hours — usually faster.`

**Right column, three hairline blocks:**
1. `What happens next`
   - `1 — You hear back fast` · `Average reply is under three hours, from the person who'll build the work.`
   - `2 — You get one number` · `Clear scope, flat price, no retainers. A working draft follows within days.`
   - `3 — You approve before you pay` · `The invoice doesn't exist until you sign off on the draft. The risk stays on my side.`
2. `Quick facts` [`viper` ✓]: `Free first consultation` · `No long-term contracts` · `One-time pricing, no monthly fees` · `You talk directly to the person building it` · `Average response under 3 hours`
3. `Prefer to talk?` · `Call or text — Yuma & Foothills, AZ.` · `(928) 916-3711` · email *(⚠ decision: site currently mixes a Gmail address — pick one branded address, use it everywhere).*

### 3.7 Footer (all pages) — full-bleed `ink` inversion

- Col 1: `AVORIA` [mono] · `Websites you own. Built to earn.` (replaces "Visibility. Authority. Revenue." — off-voice) · [mono, faint] `YUMA, AZ`
- Col 2 `SERVICES`: Web design & development · Custom web applications · Performance & SEO
- Col 3 `COMPANY`: About · Work · Notes
- Col 4 `CONNECT`: Contact · (928) 916-3711 · email
- Bottom bar [mono]: `© 2026 AVORIA — HAND-CODED IN YUMA, AZ` · `THIS SITE: 100/100 LIGHTHOUSE · 0 TRACKERS · $0/MO HOSTING` · Privacy · Terms

### 3.8 404

H1: `This page shed its *skin*.` · sub `It's not here anymore — but everything worth seeing is one click away.` · **Back to home**.

---

## Part 4 — Content & SEO plan (Rand + Bhavik + Kurogo)

**Pillar 1 — Local (money pages):** `web designer yuma az`, `yuma web design`, `website design yuma arizona`. Home + Services carry these in titles and near-H1 copy; pillar article: `Web Design in Yuma: What It Should Actually Cost in 2026`.

**Pillar 2 — Ownership (the differentiator):** the 6 existing articles + `The Website Ownership Checklist: 9 Things to Ask Any Developer` · `How to Leave Squarespace Without Losing Your Google Rankings` · `Why Your Site Can Host for $0/Month (Really)`.

**Pillar 3 — Small-business software:** `Signs Your Business Has Outgrown Calendly` · `What a Custom Booking App Actually Costs` · `The Spreadsheet Breaking Point` · `Client Portals for One-Person Businesses`.

**Pillar 4 — Nonprofit tech (the moat):** `Running a Rescue on Spreadsheets Nearly Broke Us` · `Free and Almost-Free Tech Every Small Nonprofit Should Use` · `What Shelter Software Gets Wrong` · `Grant-Friendly Websites: What Funders Look For`.

Cadence 2/month; every article ends with one contextual CTA to `/contact`; Article schema + author bio block on each. 17 mapped; the rest come from mining real client questions.

---

## Part 5 — Build order (Timothy)

1. Design tokens: rewrite `tailwind.config.ts` + `globals.css` (light palette, JetBrains Mono, kill gradients/glass/gradient scrollbar).
2. `Navigation` + `Footer` (sets the new frame).
3. Home → Services → Work → Notes → About → Contact → 404.
4. Metadata + JSON-LD per page; JetBrains Mono via `next/font`.
5. Delete: mouse-follow blob, sparkle burst, logo alert. Add `prefers-reduced-motion` guards.
6. Lighthouse pass to 100s; print the score in the footer only once it's true.

---

## Open decisions for Shiann (only 3)

1. **Email:** branded address (e.g. `hello@avoria.dev`) or keep the Gmail? The site currently shows both styles.
2. **About photo:** current headshot, or you with a rescue animal? (Team vote: the rescue photo — it *is* the brand.)
3. **Claims check:** "50+ clients / 5.0★ / zero refunds" — confirm current and citable before they're carved into the new design.
