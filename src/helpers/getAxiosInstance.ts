import axios from 'axios'

const { BACKEND_URL: baseURL } = process.env

// TODO:X make the function to be `getAxiosConfig` instead, get rid of axios.create
// TODO:X add `transformResponse` function for axios, to make a good object of `{ [id]: value }`
// https://github.com/prometheonsystems/bedrock-client2/issues/5
export default (token?: string) => axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    ...( token && { Authorization: `Bearer ${token}` } ),
  },
  timeout: 5000,
})
