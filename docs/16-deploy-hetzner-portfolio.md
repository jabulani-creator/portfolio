# Deploy this portfolio on Hetzner

This app is **Next.js only** (no Django). Sanity CMS lives at **`/admin`** on the same domain.

It fits the same pattern as your demo-hub guide: **`deploy` user**, **PM2**, **Nginx**, **one port per app**.

---

## What you need before starting

| Item | Example for this repo |
|------|------------------------|
| Server | Hetzner VPS, SSH as `deploy@YOUR_IP` |
| GitHub SSH | Server key added to GitHub (see your main Hetzner guide) |
| Domain | `thewebsiteguy.zm` → A record to server IP |
| Sanity | Project `43qkdan1` (or yours), dataset `production` |
| Port | **3003** for this app (leave 3001/3002 for other demos) |

After deploy, in [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **CORS origins**, add:

- `https://thewebsiteguy.zm` (and `https://www.thewebsiteguy.zm` if you use www)

---

## 1. Clone on the server

```bash
mkdir -p ~/apps
cd ~/apps
git clone git@github.com:jabulani-creator/portfolio.git portfolio
cd ~/apps/portfolio
```

---

## 2. Create production env (server only)

```bash
cp .env.production.example .env.production
nano .env.production
```

Set at minimum:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` — your Sanity project ID  
- `NEXT_PUBLIC_SANITY_DATASET=production`  
- `NEXT_PUBLIC_SITE_URL=https://thewebsiteguy.zm`  
- `PORT=3003`  
- `PM2_APP_NAME=portfolio-frontend`  

Do **not** commit `.env.production`. It stays only on the server.

---

## 3. Install, build, run with PM2

```bash
cd ~/apps/portfolio
npm ci
set -a
. ./.env.production
set +a
npm run build
pm2 start ecosystem.config.cjs --only portfolio-frontend --update-env
pm2 save
```

Check:

```bash
pm2 status
curl -I http://127.0.0.1:3003
```

You should see HTTP headers from Next.js.

**Important:** `NEXT_PUBLIC_*` values are embedded at **`npm run build`**. If you change them later, reload env and run **`npm run build`** again, then:

```bash
pm2 restart portfolio-frontend --update-env
```

---

## 4. Nginx (domain → port 3003)

Create a site config:

```bash
sudo nano /etc/nginx/sites-available/thewebsiteguy.zm
```

Paste (replace domain if different):

```nginx
server {
    listen 80;
    server_name thewebsiteguy.zm www.thewebsiteguy.zm;

    location / {
        proxy_pass http://127.0.0.1:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and reload:

```bash
sudo ln -sf /etc/nginx/sites-available/thewebsiteguy.zm /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 5. HTTPS (Let’s Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d thewebsiteguy.zm -d www.thewebsiteguy.zm
```

Certbot updates Nginx for HTTPS. Renewals are automatic.

---

## 6. Updates after you push to GitHub

```bash
cd ~/apps/portfolio
git pull
npm ci
set -a && . ./.env.production && set +a
npm run build
pm2 restart portfolio-frontend --update-env
pm2 save
```

---

## 7. Sanity checklist (live site)

1. Case studies: **Show on public website** on + **Publish** in Studio.  
2. CORS includes your HTTPS domain (step above).  
3. Optional seed on server (needs token in `.env.production` temporarily):

   ```bash
   # add SANITY_API_TOKEN=... to .env.production, then:
   set -a && . ./.env.production && set +a
   npm run seed:sanity
   ```

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Build runs out of memory | Add swap (Step 8 in your Hetzner beginner guide) |
| Site works on `:3003` but not domain | Nginx `proxy_pass` port, `nginx -t`, firewall allows `Nginx Full` |
| `/admin` blank or project error | Wrong `NEXT_PUBLIC_SANITY_PROJECT_ID`; rebuild after fixing env |
| CMS content missing on site | Publish + **Show on public website**; check dataset is `production` |
| `Permission denied` editing nginx | Use `sudo nano ...` |

---

## Multiple apps on one server

Keep this app on **3003**. Other demos use their own ports (3001, 3002, …). Each gets its own Nginx `server_name` (domain or subdomain).

Related: [11-sanity-fresh-start.md](./11-sanity-fresh-start.md), [10-cms-publishing-checklist.md](./10-cms-publishing-checklist.md)
