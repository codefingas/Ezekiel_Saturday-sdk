# The One API SDK (TypeScript) Design
The One API SDK is designed to provide an easy-to-use and convenient way to access the movie endpoints of "The One API" (https://the-one-api.dev/v2/movie). The SDK is built using functional components and the axios library to make HTTP requests.

## Architecture
The SDK is built as a set of functional components that interact with the API endpoints. Each component is responsible for making a specific type of request to the API (e.g. getting all movies, getting a movie by id, etc.).

The components use axios to make HTTP requests and return the response data. The response data is then processed and returned to the calling code, making it easy to use and integrate into other projects.

## Design Decisions
The design of the SDK was guided by a few key considerations:

1. Simplicity: The SDK is designed to be simple and easy to use. It provides a clean and intuitive interface for accessing the movie endpoints of the API.

2. Flexibility: The SDK is designed to be flexible and easily adaptable to different use cases. It can be used in a variety of projects and integrated with other tools and libraries.

3. Reusability: The SDK is designed to be reusable and easy to maintain. It uses well-established patterns and practices to ensure that it can be easily extended and modified as needed.

4. Reliability: One of the main design decisions for this SDK was to ensure reliability in accessing the API. To achieve this, we added the axios-retry library to the API layer. This library adds retry logic to API requests and will automatically retry a request if it fails due to a network error or timeout. This improves the reliability of API calls and reduces the risk of temporary failures causing a complete loss of data. The configuration options of axios-retry allow for fine-tuning the retry behavior, such as the number of retries, delay between retries, and conditions under which retries should occur.

5. Security: Access to the API requires a valid access key, which must be provided by the user of the SDK. To ensure the access key is kept safe, it is not included in the final build on GitHub. Instead, users are instructed to provide the access key as a constant in a file called constant.ts in the root folder of the SDK. Clear documentation and installation instructions are provided to guide users on how to obtain and provide a valid access key after installing the SDK from npm.

6. Documentation: The SDK is thoroughly documented using TypeScript comments and can be generated into documentation using typedoc. This documentation provides clear and concise information on how to use the SDK, including code examples and explanations of the different methods.

# Conclusion
The The One API SDK is a well-designed and easy-to-use solution for accessing the movie endpoints of ["The One API"](https://the-one-api.dev/v2/). Its functional components, flexible architecture, and reusable code make it a great choice for any project that requires access to this API.