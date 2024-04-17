import { RESTDataSource } from "@apollo/datasource-rest";
import { PlayList } from "../types";

export class SpotifyAPI extends RESTDataSource {
    baseURL = "https://spotify-demo-api-fe224840a08c.herokuapp.com/v1/";

    async getFeaturedPlaylists(): Promise<PlayList[]> {
        const response = await this.get<{
             playlists: {
                items: PlayList[]
             }
            }>("browse/featured-playlists");
        return response?.playlists?.items ?? [];
    }
}
