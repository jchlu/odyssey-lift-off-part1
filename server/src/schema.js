const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    "Query to retrieve an array of Tracks fo display on the homepage"
    tracksForHome: [Track!]!
  }
  type Track {
    id: ID!
    "The Track title (required)"
    title: String!
    "The Author of the Track as an Author type (required)"
    author: Author!
    "The url of the thumbnail picture for the Track"
    thumbnail: String
    "The approximate number of minutes required to complete the Track"
    length: Int
    "The number of modules in the Track"
    modulesCount: Int
  }
  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`

module.exports = typeDefs
