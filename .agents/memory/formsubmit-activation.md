---
name: Inquiry provider decision
description: Why Formspree replaced FormSubmit and how to report submission success
---

Use Formspree for website inquiries. The user supplied its public form endpoint after the previous FormSubmit integration failed.

**Why:** FormSubmit failed even after the user confirmed activation, first with browser CORS restrictions and then with a provider HTTP 522 timeout. Formspree accepted a real browser test submission with HTTP 200 and `ok: true`.

**How to apply:** Keep submission on the website and show the thank-you popup only after explicit provider acceptance. Preserve visitor input on errors. Do not equate provider acceptance with verified inbox delivery. Never silently retry a timed-out request through another transport, because it could duplicate inquiries.
