/* ---------------------------------------------------------------------------
   StarFN Competitive & Kovaaks Coaching — checkout configuration
   ---------------------------------------------------------------------------
   This is the only file to edit if a Whop checkout link ever changes. Every
   buy button on every page reads its link from here.

   To swap a link: copy the product's public checkout link from your Whop
   dashboard (it looks like https://whop.com/checkout/plan_XXXXXXXX), paste it
   between the quotes below, then commit and push — Vercel redeploys
   automatically, usually within a minute.

   Safety net: if a value below is ever left empty or is not an https:// link,
   that product's buttons automatically turn into a "Checkout opening soon"
   button pointing at the contact page, rather than sending a customer to a
   dead checkout.
--------------------------------------------------------------------------- */

window.STARFN_CHECKOUT = {
  // Fortnite Competitive Coaching — PDF (Full Playbook, $49.99 USD)
  full: "https://whop.com/checkout/plan_Eo9D3wFTDajti",

  // Fortnite Competitive Coaching — PDF, Lite Version (Lite Playbook, $29.99 USD)
  lite: "https://whop.com/checkout/plan_onKWCD9fTla35"
};
