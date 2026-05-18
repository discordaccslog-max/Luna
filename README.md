# My Store — Static Website

Replicated from Shopify Horizon theme. Pure HTML/CSS/JS — no framework needed.

## File Structure

```
website/
├── index.html              ← Homepage
├── vercel.json             ← Vercel deployment config
├── css/
│   └── styles.css          ← All styles (replicated from Shopify Horizon base.css)
├── js/
│   └── main.js             ← Cart, search, mobile nav, interactions
└── pages/
    ├── collection.html     ← All Products / Collection page
    ├── product.html        ← Product detail page
    ├── cart.html           ← Cart page
    ├── about.html          ← About page
    ├── contact.html        ← Contact page
    └── 404.html            ← 404 error page
```

## Deploying to Vercel (Free)

### Option A — Drag & Drop (Easiest)
1. Go to [vercel.com](https://vercel.com) and sign up / log in
2. Click **"Add New Project"** → **"Upload"**
3. Drag the entire `website/` folder into the upload area
4. Click **Deploy** — done! You'll get a free `.vercel.app` URL instantly

### Option B — Via GitHub (Recommended for updates)
1. Create a free account at [github.com](https://github.com)
2. Create a new repository (e.g. `my-store`)
3. Upload all files from the `website/` folder to the repo
4. Go to [vercel.com](https://vercel.com) → **"Add New Project"**
5. Connect your GitHub account and select your repo
6. Click **Deploy** — Vercel auto-deploys on every git push

### Connecting a Custom Domain
1. In your Vercel project → **Settings → Domains**
2. Add your domain (e.g. `mystore.com`)
3. Follow the DNS instructions to point your domain to Vercel
4. SSL certificate is applied automatically (free)

---

## Customizing Your Store

### Change Store Name
Search and replace **"My Store"** in all HTML files with your actual store name.

### Add Your Logo
Replace the `<span class="header-logo-text">My Store</span>` in each HTML file with:
```html
<img src="../assets/logo.png" alt="Your Store Name" style="height:36px;width:auto;">
```
Place your logo image in the `assets/` folder.

### Update Products
In `index.html` and `pages/collection.html`, edit the product cards to reflect your real products:
- Update the product names and prices
- Replace the placeholder SVG with real product images:
  ```html
  <img src="../assets/product-image.jpg" alt="Product Name" loading="lazy">
  ```

### Update Colors
In `css/styles.css`, edit the `:root` variables at the top to change the color scheme.

### Add Announcement Bar Text
Edit the text inside `.announcement-bar` in each HTML file.

### Update Footer Links
- Replace `hello@mystore.com` with your email
- Update the social media URLs (Facebook, Instagram, TikTok, YouTube)
- Update the copyright year/name

---

## Adding Real Checkout

Since this is a static site, checkout requires an external service:

- **Shopify Buy Button** — embed Shopify's buy button to keep using Shopify's checkout
- **Stripe** — integrate Stripe Checkout for payments
- **Snipcart** — drop-in shopping cart with minimal setup
- **Gumroad** — great for digital products

---

## Notes

- Cart is stored in `localStorage` — persists across page refreshes
- All pages are fully mobile-responsive
- No dependencies — pure HTML/CSS/JavaScript
