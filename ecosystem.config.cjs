module.exports = {
  apps: [
    {
      name: "DM-pos",
      script: "./dist/index.js",
      env: {
        NODE_ENV: "production",
        PORT: 3050,
        MONGODB_URI: "mongodb+srv://raneaniket23_db_user:OI5H11tRz7h2ZUNF@pos.kk3ptmo.mongodb.net/?appName=POS"
      }
    }
  ]
};