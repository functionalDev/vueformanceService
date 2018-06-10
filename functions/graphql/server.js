const bodyParser = require("body-parser");
const express = require("express");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const { printSchema } = require("graphql/utilities/schemaPrinter");

const { typeDefs } = require("./data/schema");
const { resolvers } = require("./data/resolvers");

const setupGraphQLServer = () => {

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  // setup server
  const graphQLServer = express();

  // /api/graphql
  graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: {} }));

  // /api/graphiql
  graphQLServer.use(
    "/graphiql",
    graphiqlExpress({ endpointURL: "/api/graphql" })
  );

  // /api/schema
  graphQLServer.use("/schema", (req, res) => {
    res.set("Content-Type", "text/plain")
    res.send(printSchema(executableSchema))
  });

  return graphQLServer;
}

module.exports = {
  setupGraphQLServer
};
