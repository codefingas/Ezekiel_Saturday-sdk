import TheOneApi from "./index";
import { get } from "./connector/agent";

jest.mock("./index.ts");
jest.mocked("./connector/agent.ts");

const mockedGet = get as jest.MockedFunction<typeof get>;
const MockedTheOneApi = TheOneApi as jest.MockedFunctionDeep<typeof TheOneApi>;
const mockGetMovies = jest.fn();

jest.mock("./index.ts", () => {
    return jest.fn().mockImplementation(() => {
        return { getMovies: mockGetMovies };
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
    })
});