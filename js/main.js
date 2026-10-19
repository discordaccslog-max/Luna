/* StarFN — minimal progressive enhancement. No tracking, no cookies. */
(function () {
  "use strict";

  /* Current year in the footer */
  var y = String(new Date().getFullYear());
  Array.prototype.forEach.call(document.querySelectorAll("[data-year]"), function (el) {
    el.textContent = y;
  });

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* Wire up Whop checkout buttons from js/config.js */
  var cfg = window.STARFN_CHECKOUT || {};
  Array.prototype.forEach.call(document.querySelectorAll("[data-checkout]"), function (el) {
    var key = el.getAttribute("data-checkout");
    var url = typeof cfg[key] === "string" ? cfg[key].trim() : "";

    if (url && /^https:\/\//i.test(url)) {
      el.setAttribute("href", url);
      el.setAttribute("rel", "noopener");
      return;
    }

    /* No link configured yet — fail safe instead of sending people nowhere. */
    el.setAttribute("href", "/contact");
    el.classList.remove("btn-primary");
    el.classList.add("btn-secondary");
    el.textContent = "Checkout opening soon \u2014 contact us";
  });
})();
