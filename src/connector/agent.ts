import a from 'axios';
import axiosRetry, { isNetworkOrIdempotentRequestError } from "axios-retry";
import http from 'http';
import https from "https";


export const axios = a.create({
    httpAgent: new http.Agent({ keepAlive: true }),
    httpsAgent: new https.Agent({ keepAlive: true })
});


//incase of 429 too many requests error, request is triggered again.
axiosRetry(axios, {
    retryDelay: () => 1000,
    retries: 5,
    retryCondition: (error) => isNetworkOrIdempotentRequestError(error) || error?.response?.status == 429
});

const baseUrl = () => `https://the-one-api.dev/v2/movies`;

const headers = (accessToken: string) => ({ headers: { Authorization: `Bearer ${accessToken}` } });

export const get = async<T>(url: string, accessToken: string): Promise<T> => {
    const { data } = await axios.get(`${baseUrl()}${url}`, headers(accessToken));
    return data;
};