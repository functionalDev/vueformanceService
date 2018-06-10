// Some fake data
const cards = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    description: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    description: 'Michael Crichton',
  },
];

const resolvers = {
  Query: { cards: () => cards },
};

module.exports = {
  resolvers
};
