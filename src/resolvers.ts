import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    // featuredPlaylists: (_, __, { dataSources }) => {
    //   return dataSources.spotifyApi.getFeaturedPlaylists();
    // },
    playlist: (_, { id }, { dataSources }) => {
      return dataSources.spotifyApi.getPlaylist(id);
    }
  },
  Playlist: {
    tracks: ({ tracks }) => {
      const { items = [] } = tracks;
      return items.map(({ track }) => track);
    }
  },
  Track: {
    durationMs: (parent) => parent.duration_ms
  },
  Mutation: {
    addItemsToPlaylist: async (_,  { input } , { dataSources }) => {
      try {
        const response = await dataSources.spotifyApi.addItemsToPlaylist(input);
        console.log(response);
        if (response.snapshot_id) {
          return {
            code: 200,
            success: true,
            message: "Tracks added to playlist!",
            playlist: null
          };
        } else {
          throw Error("snapshot_id property not found");
        }
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${err}`,
          playlist: null,
        };
      }
    },
  },
};
