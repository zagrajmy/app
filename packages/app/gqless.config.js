require('dotenv').config();

module.exports = {
  url: "http://localhost:8081/v1/graphql",
  outputDir: "data/gql",
  headers: {
    'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET
  }
};
