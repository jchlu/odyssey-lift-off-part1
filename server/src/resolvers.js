const resolvers = {
  Query: {
    /* returns an array of tracks for use on the homepage.
     *  resolver method constructors accept: (parent, args, context, info)
     */

    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome()
    },
    // Returns a single track based on its' id
    track: (_, { trackId }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(trackId)
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId)
    },
    modules: ({ trackId }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(trackId)
    }
  }
}

module.exports = resolvers
