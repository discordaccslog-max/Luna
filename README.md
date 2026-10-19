# StarFN Competitive & Kovaaks Coaching

The public website for **StarFN Competitive & Kovaaks Coaching**, selling two downloadable
Fortnite competitive coaching PDFs.

Live site: <https://luna-zeta-ten.vercel.app>

Plain static HTML, CSS and a few lines of JavaScript. No framework, no build step, no
dependencies, no `npm install`. Vercel serves the files exactly as they are in this repo.

---

## 1. Whop checkout

Live and wired up. Checkout links live in **one file**: [`js/config.js`](js/config.js), and
every buy button on every page reads from it.

```js
window.STARFN_CHECKOUT = {
  full: "https://whop.com/checkout/plan_Eo9D3wFTDajti",  // PDF            ($49.99)
  lite: "https://whop.com/checkout/plan_onKWCD9fTla35"   // PDF Lite       ($29.99)
};
```

To change a link: copy the product's public checkout link from your Whop dashboard
(`https://whop.com/checkout/plan_XXXXXXXX`), paste it between the quotes, commit and push.
Vercel redeploys automatically, usually within a minute.

**Safety net:** if a value is ever left empty or is not an `https://` link, that product's
buttons automatically become a "Checkout opening soon - contact us" button pointing at
`/contact`, rather than sending a customer to a dead checkout.

---

## 2. Pages

| URL | File | Purpose |
| --- | --- | --- |
| `/` | `index.html` | Home - both products, how it works, expectations |
| `/products` | `products.html` | Side-by-side comparison of both editions |
| `/coaching-pdf-full` | `coaching-pdf-full.html` | Full edition, $49.99, 10+ pages |
| `/coaching-pdf-lite` | `coaching-pdf-lite.html` | Lite edition, $29.99, 5 pages |
| `/faq` | `faq.html` | 16 questions on delivery, refunds, licensing, age |
| `/about` | `about.html` | Business background and details |
| `/contact` | `contact.html` | Support email, response times, business details |
| `/terms` | `terms.html` | Terms of Service (21 clauses) |
| `/privacy` | `privacy.html` | Privacy Policy (GDPR / UK GDPR / CCPA / CPRA) |
| `/refund-policy` | `refund-policy.html` | Refund Policy for instant digital goods |
| `/delivery` | `delivery.html` | Digital delivery policy |
| `/cookies` | `cookies.html` | Cookie Notice (this site sets none) |
| `/disclaimer` | `disclaimer.html` | Non-affiliation and no-results-guarantee |
| `/ip-policy` | `ip-policy.html` | Copyright, licence and DMCA procedure |
| `/accessibility` | `accessibility.html` | WCAG 2.1 AA statement |
| - | `404.html` | Not-found page (served automatically by Vercel) |

`vercel.json` sets `cleanUrls: true`, so `/terms` serves `terms.html`. Link without the
`.html` extension.

---

## 3. Things you should check and edit

- **Product contents.** The chapter lists on `coaching-pdf-full.html` and
  `coaching-pdf-lite.html` must match the PDFs customers actually receive. Both files carry
  an `EDIT ME` comment right above that block. Describing content you do not deliver is
  both a consumer-law problem and a payment-provider problem, so adjust the wording to
  match your real files.
- **Support email.** `starfnshop@gmail.com` is used site-wide as the public support
  address. To change it, find and replace that string across the `.html` files.
- **Governing law.** Clause 20 of the Terms refers to "the country in which StarFN
  Competitive & Kovaaks Coaching is established". Naming your actual country there is
  stronger - replace that phrase once you decide what to state publicly.
- **Business identity.** Some jurisdictions require a registered trading address or
  company number on a commercial website. If that applies to you, add it to the business
  details tables on `/about` and `/contact`.

---

## 4. Editing

Everything is hand-editable HTML. The header and footer are repeated in each file, so a
site-wide nav or footer change means editing every `.html` file (or a find-and-replace).

- Colours and spacing: the `:root` block at the top of `css/styles.css`.
- Prices: they appear in the product pages, the comparison table, the footer and the FAQ.
  Search for `49.99` and `29.99`.
- Behaviour: `js/main.js` only does three things - the footer year, the mobile menu, and
  wiring the Whop links from `config.js`.

---

## 5. Compliance notes

Deliberate choices, not oversights:

- **No cookies, no analytics, no third-party requests.** No Google Fonts, no tag manager,
  no pixels. The site uses system fonts. This is why there is no cookie banner and why the
  Privacy Policy can state plainly that the site collects nothing.
- **Strict Content-Security-Policy** in `vercel.json` (`default-src 'self'`), plus HSTS,
  `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and `Permissions-Policy`.
  Because the CSP forbids inline scripts, do not add inline `<script>` blocks - put the
  code in `js/` instead.
- **Digital-goods consent wording** sits next to every buy button: the customer requests
  immediate delivery and acknowledges losing the 14-day withdrawal right. This is what
  makes a no-change-of-mind refund policy lawful in the UK and EU.
- **No results claims anywhere.** No guaranteed placements, qualifications or earnings.
- **Non-affiliation with Epic Games and KovaaK's** is stated in the footer of every page
  and in full on `/disclaimer`.

---

## 6. Local preview

No build step. Open `index.html` directly, or serve the folder so that clean URLs behave
like production:

```bash
npx serve .
```

---

## 7. Deploying

Vercel is already connected to this repository and deploys `main` automatically. Pushing a
commit is the whole deployment process. There is no build command and no output directory
to configure - it is a static site served from the repository root.
