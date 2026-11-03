---
name: FormSubmit activation
description: Email-service selection and acceptance semantics for website inquiries
---

FormSubmit was selected to match the user's other website. It requires one-time recipient activation before inquiries can be accepted.

**Why:** A real setup request initially returned HTTP 200 with `success: "false"` and an activation notice. On 2026-11-03 the user confirmed the activation email had already been approved. A browser test on the custom production domain subsequently confirmed that FormSubmit's JSON AJAX preflight lacked the required CORS permission. Activation alone does not resolve that failure. Actual inquiry delivery has not been independently confirmed.

**How to apply:** Do not equate HTTP success with provider acceptance or promise inbox delivery without verification. Preserve visitor input on rejected requests. Do not keep asking for initial activation; the user confirmed it is done. If changing email services later, confirm with the user rather than assuming the previously suggested Resend service was connected.

Use the provider's native form submission rather than relying on cross-origin AJAX. Keep its security verification enabled and use an absolute return URL.

**Why:** Native navigation avoids the observed browser CORS failure without introducing a backend or new email provider. The tradeoff is that visitors may briefly leave the site for provider verification.

**How to apply:** Never replace a failed request with a fake success state or silently retry through a second transport; a timeout can otherwise lead to duplicate inquiries.
