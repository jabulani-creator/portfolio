module.exports = {
  apps: [
    {
      name: process.env.PM2_APP_NAME || "portfolio-frontend",
      script: "node_modules/next/dist/bin/next",
      args: "start -p " + (process.env.PORT || 3003),
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
