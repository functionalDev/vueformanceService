
const typeDefs = `
  type Query { cards: [Card] }
  type Card { title: String, description: String }
`;

module.exports = {
  typeDefs
};
