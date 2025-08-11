const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    city: City
  }
  type City {
    name: String!
  }
`;
module.exports = { typeDefs };
