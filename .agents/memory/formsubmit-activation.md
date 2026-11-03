---
name: FormSubmit activation
description: Email-service selection and acceptance semantics for website inquiries
---

FormSubmit was selected to match the user's other website. It requires one-time recipient activation before inquiries can be accepted.

**Why:** A real setup request returned HTTP 200 with `success: "false"` and an activation notice. The provider sent the activation link to the recipient; inbox delivery has not been confirmed.

**How to apply:** Do not equate HTTP success with provider acceptance or promise delivery before activation. Preserve visitor input on rejected requests. If changing email services later, confirm with the user rather than assuming the previously suggested Resend service was connected.
