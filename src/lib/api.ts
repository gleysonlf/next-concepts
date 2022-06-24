import { stringifyUrl } from 'query-string';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const defaultHeaders = {
  'Content-Type': 'application/json',
};

export const fetchApi = async (
  resource = '',
  method = 'GET',
  body = null,
  options = {}
) => {
  const url = `${API_BASE_URL}/${resource}`;
  const uri = stringifyUrl({
    url: url,
    // query: {
    // ts: ts,
    // apikey: PUBLIC_KEY,
    // hash: hash
    // }
  });
  return fetch(uri, {
    method,
    body,
    headers: defaultHeaders,
    ...options,
  });
};
