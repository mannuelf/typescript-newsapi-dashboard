export const API_KEY: string = process.env.REACT_APP_API_KEY!;
export const COUNTRY: string = 'no';
export const URL: string = `http://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`;
