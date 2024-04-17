import { SpotifyAPI } from "./datasources/spotify-api";

export type DataSourceContext = {
    dataSources : {
        spotifyApi: SpotifyAPI;
    }
}
