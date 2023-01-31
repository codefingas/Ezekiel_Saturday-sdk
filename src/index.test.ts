import { describe, it, expect, jest} from '@jest/globals';
import TheOneApi from "./index";

jest.mock("./index.ts");

const MockedTheOneApi = TheOneApi as jest.MockedFunction<typeof TheOneApi>;
const mockGetMovies = jest.fn();
const mockGetOneMovie = jest.fn(x => x);
const mockGetMovieQuotes = jest.fn(x => x)

jest.mock("./index.ts", () => {
    return jest.fn().mockImplementation(() => {
        return { 
            getMovies: mockGetMovies,
            getOneMovie: mockGetOneMovie,
            getMovieQuotes: mockGetMovieQuotes
         };
    });
});

describe("SDK initialization", () => {
    it("was passed a config with an access key", () => {
        MockedTheOneApi({ accessToken: "secret-access-key" });
        expect(MockedTheOneApi).toHaveBeenCalledWith({ accessToken: "secret-access-key" })
    });
});

describe("SDK utilization", () => {
    it("gets the movies", () => {
        const theOneApi = TheOneApi({ accessToken: "secret-access-key" });
        const spy = jest.spyOn(theOneApi, "getMovies");
        theOneApi.getMovies();
        expect(spy).toHaveBeenCalled();
    });

    it("retrieves a single movie", () => {
        const theOneApi = TheOneApi({ accessToken: "secret-access-key" });
        const spy = jest.spyOn(theOneApi, "getOneMovie");
        theOneApi.getOneMovie("specific-movie-id");
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith("specific-movie-id");
    });


    it("retrieves a movie's quotes", () => {
        const theOneApi = TheOneApi({ accessToken: "secret-access-key" });
        const spy = jest.spyOn(theOneApi, "getMovieQuotes");
        theOneApi.getMovieQuotes("specific-movie-id");
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith("specific-movie-id");
    });
});