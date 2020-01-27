module.exports = {
  apps: [
    {
      name: 'MARISAYANA',
      script: './server.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production',
        autorestart: true,
        vizion: false
      }
    }
  ]
}

