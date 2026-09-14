/**
 * PM2 config for Hetzner (or any Linux host).
 *
 * On the server, after build:
 *   set -a && . ./.env.production && set +a
 *   pm2 start ecosystem.config.cjs --only portfolio-frontend --update-env
 *   pm2 save
 */
const port = Number(process.env.PORT) || 3003;
const appName = process.env.PM2_APP_NAME || "portfolio-frontend";

module.exports = {
  apps: [
    {
      name: appName,
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: `start -p ${port}`,
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "750M",
      env: {
        NODE_ENV: "production",
        PORT: String(port),
      },
    },
  ],
};
