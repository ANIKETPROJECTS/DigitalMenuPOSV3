module.exports = {
  apps: [
    {
      name: "restaurant-pos",
      script: "./dist/index.cjs",
      env: {
        NODE_ENV: "production",
        PORT: 3050, // Change this to your preferred available port
        MONGODB_URI: "your_mongodb_connection_string"
      }
    }
  ]
};