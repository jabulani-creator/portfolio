# Deploy portfolio on the central Hetzner server

This repo is **Next.js only** (no Django backend). Sanity Studio is at **`/admin`**.

It follows the same **multi-app pattern** as Crosspark / Emmasdale / Kwishoko: `deploy` user, `~/scripts/deploy_frontend.sh`, PM2, raw **IP + port** until domains are added.

---

## Port slot (add to `~/apps/PORTS.md`)

| App | PM2 name | Frontend port | Backend port |
|-----|----------|---------------|--------------|
| Crosspark | `crosspark-frontend` | 3000 | 8000 |
| Emmasdale | `emmasdale-frontend` | 3001 | 8001 |
| Kwishoko | `kwishoko-frontend` | 3002 | 8002 |
| **Portfolio (this repo)** | **`portfolio-frontend`** | **3003** | *(none)* |

```bash
nano ~/apps/PORTS.md
```

---

## 1. Push from your laptop

Use the **jabulani-creator** SSH remote (not plain `git@github.com` if that maps to nikwisa):

```bash
git remote -v
# origin  git@github-jabulani:jabulani-creator/portfolio.git
git push
```

---

## 2. Clone on the server (folder name for scripts)

Scripts expect `~/apps/<app>/<App>_Frontend`. Use app name **`portfolio`**:

```bash
mkdir -p ~/apps/portfolio
cd ~/apps/portfolio
git clone git@github.com:jabulani-creator/portfolio.git Portfolio_Frontend
```

If GitHub SSH on the server uses a deploy key, use the same host alias you configured there.

---

## 3. Configure `.env.production`

```bash
cd ~/apps/portfolio/Portfolio_Frontend
cp .env.production.example .env.production
nano .env.production
```

Set at least:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET=production`
- `NEXT_PUBLIC_SITE_URL=http://167.233.68.200:3003` (no backticks)
- `PORT=3003`
- `PM2_APP_NAME=portfolio-frontend`

**Do not commit** `.env.production`.

In [sanity.io/manage](https://www.sanity.io/manage) → **API** → **CORS origins**, add:

- `http://167.233.68.200:3003`

When you add a domain later, update CORS and `NEXT_PUBLIC_SITE_URL`, then **rebuild** (see below).

---

## 4. Deploy with the generic frontend script

No backend step for this app.

```bash
cd ~/scripts
./deploy_frontend.sh portfolio portfolio-frontend
```

Use **`portfolio`**, not `portfolio/` (trailing slash breaks logs).

**First time only**, if PM2 does not list the app yet:

```bash
cd ~/apps/portfolio/Portfolio_Frontend
set -a && . ./.env.production && set +a
npm ci
npm run build
pm2 start ecosystem.config.js
pm2 save
```

---

## 5. Open the firewall (IP + port mode)

```bash
sudo ufw allow 3003/tcp
sudo ufw status
```

---

## 6. Verify

```bash
pm2 status
curl -I http://127.0.0.1:3003
```

Browser: **http://167.233.68.200:3003**  
Studio: **http://167.233.68.200:3003/admin**

---

## 7. Updates after code changes

1. `git push` from laptop  
2. On server:

```bash
cd ~/scripts
./deploy_frontend.sh portfolio portfolio-frontend
```

If you changed any `NEXT_PUBLIC_*` in `.env.production`, the script’s build step must run with env loaded (your script should `source` `.env.production` before `npm run build`).

Manual equivalent:

```bash
cd ~/apps/portfolio/Portfolio_Frontend
git pull
set -a && . ./.env.production && set +a
npm ci
npm run build
pm2 restart portfolio-frontend --update-env
pm2 save
```

---

## 8. Optional: domain + Nginx later

When `thewebsiteguy.zm` points at `167.233.68.200`, proxy port 80/443 to `127.0.0.1:3003`, set `NEXT_PUBLIC_SITE_URL=https://thewebsiteguy.zm`, rebuild, and add HTTPS CORS in Sanity.

---

## Rules (same as multi-app runbook)

1. **No backticks** in `.env` files.  
2. **Commit and push** before `deploy_frontend.sh` (it runs `git pull`).  
3. **`NEXT_PUBLIC_*` changes require `npm run build`** again.  
4. Case studies on the live site need **Show on public website** + **Publish** in Studio.

Related: [11-sanity-fresh-start.md](./11-sanity-fresh-start.md), [10-cms-publishing-checklist.md](./10-cms-publishing-checklist.md)
