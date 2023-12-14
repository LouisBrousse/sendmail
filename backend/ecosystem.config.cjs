// backend/ecosystem.config.cjs
// production config file for pm2 - DO NOT COMMIT

// pm2 start ecosystem.config.cjs

module.exports = {
    apps : [
       {
          name: "sendmail",
          script: "./app.js",
          watch: false,
          node_args: ['--require', 'dotenv/config'],
 
          env: {
             MAIL_HOST: "smtp.sendgrid.net",
             MAIL_USER: "apikey",
             MAIL_PASSWORD: "xxxx",
          },
       },
    ]
 }