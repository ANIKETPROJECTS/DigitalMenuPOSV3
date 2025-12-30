module.exports = {
  apps: [
    {
      name: "DM-pos",
      script: "./dist/index.cjs",
      env: {
        NODE_ENV: "production",
        PORT: 3050,
        MONGODB_URI: "mongodb+srv://mingsuser:Mings123@mingscluster.mongodb.net/mingsdb?retryWrites=true&w=majority"
      }
    }
  ]
};