
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
     * Requests the list of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies
     * 
     * @returns Array of Movies  and a status code
     */
    const getMovies = async (): Promise<{docs: MoviesType[]; status: number}> => {
        const { data: {docs}, status } = await get<{ docs: MoviesType[], total: number; limit: Number; offset: number; page: number; pages: number }>("/", accessToken);
        return {docs, status};
    };

    /**
     * Requests one specific movie
     * 
     * @param id - id of movie to retrieve
     * @returns an Array with a single movie and a status code
     */
    const getOneMovie = async (id: string): Promise<{docs: MoviesType[]; status: number}> => {
        const { data: {docs}, status }= await get<{ docs: MoviesType[], total: number; limit: Number; offset: number; page: number; pages: number }>(`/${id}`, accessToken);
        return docs;
    };


    /**
     * Request all movie quotes for one specific movie (only working for the LotR trilogy)
     * @param id - id of movie quote to retrieve
     * @returns an array with of movie quotes and a status code
     */
    const getMovieQuotes = async (id: string): Promise<{docs: MoviesType[]; status: number}> => {
        const { data: {docs}, status }= await get<{ docs: MoviesType[], total: number; limit: Number; offset: number; page: number; pages: number }>(`/${id}/quote`, accessToken);
        return {docs, status};
    };



    return {
        getMovies,
        getOneMovie,
        getMovieQuotes
    };
};


export default TheOneApi;