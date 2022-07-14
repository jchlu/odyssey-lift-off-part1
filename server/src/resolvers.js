const resolvers = {
  Query: {
    /* returns an array of tracks for use on the homepage.
    *  resolver method constructors accept: (parent, args, context, info)
    */

    tracksForHome: (_, __, {dataSources}) => {
      return dataSources.trackAPI.getTracksForHome()
    }
  },
  Track: {
    author: ({authorId}, _, {dataSources}) {
      return dataSources.trackAPI.getAuthor(authorId)
    }
  }
}

module.export = resolvers