const { https } = require("firebase-functions");
const { setupGraphQLServer } = require("./graphql/server");

const graphQLServer = setupGraphQLServer();

module.exports.api = https.onRequest(graphQLServer);
