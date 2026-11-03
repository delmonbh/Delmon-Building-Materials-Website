# Launch Delmon on Render

This website is a static React site. It does not require the API server, a
database, or Replit secrets. Inquiries are submitted directly to FormSubmit.

## 1. Push to GitHub

Connect GitHub in Replit's Git pane and push the entire project to a repository.
Keep `pnpm-workspace.yaml`, `pnpm-lock.yaml`, `package.json`, `render.yaml`,
`artifacts/delmon-website`, and the shared `lib` packages together.
Do not upload secrets, `.env` files, `node_modules`, or `.pythonlibs`.

## 2. Create the Render site

Fastest: Render Dashboard → New → Blueprint → connect the GitHub repository.
Render reads the supplied `render.yaml`. Review and approve the deployment.

Alternatively, choose New → Static Site and use:

| Setting | Value |
| --- | --- |
| Root Directory | Leave blank |
| Build Command | `pnpm install --frozen-lockfile --prod=false && PORT=5173 BASE_PATH=/ pnpm --filter @workspace/delmon-website run build` |
| Publish Directory | `artifacts/delmon-website/dist/public` |
| Node version | `22` |
| SKIP_INSTALL_DEPS | `true` |

For manual setup, add a **Rewrite** from `/*` to `/index.html` in Redirects/Rewrites.
This makes direct visits and refreshes on `/products`, `/about`, `/services`,
and `/contact` work correctly.

Wait for a successful build and test the actual `onrender.com` address Render
assigns. Do not assume the service name is the assigned address.

## 3. Connect the GoDaddy domain

In Render → site → Settings → Custom Domains, add `www.delmon-bh.com`
if the Blueprint has not already added it. Render automatically pairs the root
domain and redirects it to `www`.

In GoDaddy → delmon-bh.com → DNS, record the old website records first so they
can be restored if necessary. Change only the website records:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `216.24.57.1` (confirm against Render's current instructions) |
| CNAME | `www` | The actual hostname assigned by Render, without `https://` or a trailing slash |

Replace conflicting website A/CNAME records and remove conflicting AAAA records
for `@` and `www` if present. Do not change mail records, MX, SPF/DKIM/DMARC TXT
records, or nameservers. If another provider manages DNS, make these changes
there instead.

Return to Render, click Verify for each domain, and wait for HTTPS to be issued.
DNS propagation and HTTPS provisioning may take time.

## 4. Final checks

- Open `https://www.delmon-bh.com` and the root domain.
- Open `/products` and `/contact` directly, then refresh each page.
- Check all product popups and the anniversary badge on a phone.
- Submit one clearly identified test inquiry and confirm actual inbox delivery.
- FormSubmit needs recipient activation. Check the recipient inbox for its
  activation email; a new site origin may require another confirmation.

No DNS change or live publication is performed merely by adding these files.
