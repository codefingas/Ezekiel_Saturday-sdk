
import { get } from "./connector/agent";

export type TheOneApiConfig = {
    accessToken: string; //You need to pass the access key which will be used as a bearer token in every request made to the api.
};

export type MoviesType = {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    boxOfficeRevenueInMillions: number;
    academyAwardNominations: number;
    academyAwardWins: number;
    rottenTomatoesScore: number;
};

/**
 * 
 * @param config initialize the method with the access token
 */

const TheOneApi = (config: TheOneApiConfig) => {
    const { accessToken } = config;

    /**
     * 
     * @returns Array of Movies
     */
    const getMovies = async (): Promise<MoviesType[]> => {
        const { docs } = await get<{ docs: MoviesType[], total: number; limit: Number; offset: number; page: number; pages: number }>("/", accessToken);
        return docs;
    };

  /**
   * 
   * @param id - id of movie to retrieve
   * @returns an Array with a single movie
   */
    const getOneMovie = async (id: string): Promise<MoviesType[]> => {
        const { docs } = await get<{ docs: MoviesType[], total: number; limit: Number; offset: number; page: number; pages: number }>(`/${id}`, accessToken);
        return docs;
    };

    return {
        getMovies,
        getOneMovie
    };
};


export default TheOneApi;