---
name: FormSubmit activation
description: Email-service selection and acceptance semantics for website inquiries
---

FormSubmit was selected to match the user's other website. It requires one-time recipient activation before inquiries can be accepted. The user has confirmed that recipient activation is complete; actual inbox delivery remains unverified.

**Why:** A setup request originally returned HTTP 200 with `success: "false"` and an activation notice. The user subsequently confirmed activation when asked directly.

**How to apply:** Do not equate HTTP success with provider acceptance or promise inbox delivery without verification. Treat activation as complete unless new evidence contradicts the user's confirmation. Preserve visitor input on rejected requests. If changing email services later, confirm with the user rather than assuming the previously suggested Resend service was connected.
