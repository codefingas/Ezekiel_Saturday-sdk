# The One API SDK (TypeScript)

This SDK provides a convenient way to access the "The One API" (https://the-one-api.dev/v2/) movie endpoints in TypeScript. The SDK is built using functional components and axios library to make HTTP requests.

## Installation
To install the The One API SDK, simply run the following command in your project directory:

```shell
npm install Ezekiel_Saturday-sdk
```

## Usage

To use the SDK, simply import it into your file:

```typescript
import TheOneApi from 'Ezekiel_Saturday-sdk';
```

You need an access token to make requests to the "The One API".  You can obtain an access token by signing up for an account [here](https://the-one-api.dev/sign-up). All you need for setting up an account is a valid email address.

You can then use the following methods to interact with the movie endpoints of the API:

```typescript
async function main() {
  const theOneApi = TheOneApi({accessToken: "your-access-key"});

  const movies = await theOneApi.getMovies();
  console.log(movies.data);

  const movie = await theOneApi.getOneMovie('id');
  console.log(movie.data);

  const quotes = await theOneApi.getMovieQuotes('id');
  console.log(getMovieQuotes.data);
}

main();

```

## Testing

You can test the SDK by importing it into a test file and using the jest library to run tests against the API. Here is an example test file:

```typescript
import theOneApi from 'Ezekiel_Saturday-sdk';

describe('The One API SDK', () => {
  it('should get all movies', async () => {
    const response = await theOneApi.getMovies();
    expect(response.status).toEqual(200);
  });

  it('should get a movie by id', async () => {
    const response = await theOneApi.getMovieById('id');
    expect(response.status).toEqual(200);
  });

  it('should search movies', async () => {
    const response = await theOneApi.searchMovies('query');
    expect(response.status).toEqual(200);
  });
});

```

You can then run the tests using the following command:
```bash
npm run test
```

## Conclusion
With this SDK, you can easily access the movie endpoints of "The One API" in a project. The SDK is easy to install, use, and test, making it a convenient solution for any project that requires access to this API.
