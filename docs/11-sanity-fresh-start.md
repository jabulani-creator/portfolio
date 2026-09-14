# Sanity — start fresh (one project, no confusion)

Use **one** Sanity project for this repo. Ignore other tiles on your dashboard (backend, my-portfolio, server, etc.) unless you deliberately point `.env.local` at them.

## 1. Create a clean project (recommended)

1. Go to [sanity.io/manage](https://www.sanity.io/manage).
2. **+ New project** → name it e.g. **`portfolio-cms`** (anything you will remember).
3. Open the new project → **Settings** → copy **Project ID** (e.g. `abc123xy`).
4. **Datasets** → confirm **`production`** exists (default).

You do **not** need to delete old projects. Leave them archived or ignore them.

## 2. Allow local Studio

**API** → **CORS origins** → add:

- `http://localhost:3000`

(Save. Add your live domain later when you deploy.)

## 3. Wire this codebase

In the repo root:

```bash
copy .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=paste_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=paste_editor_token_here
```

Create the token: **API** → **Tokens** → **Add API token** → **Editor**.

Restart dev server:

```bash
npm run dev
```

Open **`http://localhost:3000/admin`**. You should see empty document types until you seed or create content.

## 4. Seed case studies (optional)

```bash
npm run seed:sanity
```

Then in Studio: **Case Study** → open Emmasdale / Nikwisa → add hero images → turn on **Published** → save.

Or set `SEED_PUBLISH=true` in `.env.local` before seeding to publish immediately.

## 5. Verify you are on the right project

| Check | Where |
|--------|--------|
| Project ID in `.env.local` | Matches **Settings** in the project you created |
| Studio list | **Case Study** shows seeded docs after step 4 |
| sanity.io Overview | **Documents** count increases after seed |
| Public site | After publish, `/case-studies` lists CMS entries (not only defaults) |

## 6. If you want to wipe content (same project)

In Studio you can delete documents one by one. To empty a dataset completely, use Sanity manage or the CLI — only if you are sure. Easier: **create a new project** (step 1) and point `.env.local` at it.

## Config in code

All reads use [`sanity/config/client-config.ts`](../sanity/config/client-config.ts) via `NEXT_PUBLIC_SANITY_PROJECT_ID`. No project ID is hardcoded in the repo anymore.

Related: [10-cms-publishing-checklist.md](./10-cms-publishing-checklist.md)
