module.exports = {
  apps: [
    {
      name: "restaurant-pos",
      script: "./dist/index.cjs",
      env: {
        NODE_ENV: "production",
        PORT: 3050,
        MONGODB_URI: "mongodb://your_actual_mongodb_uri_here"
      }
    }
  ]
};