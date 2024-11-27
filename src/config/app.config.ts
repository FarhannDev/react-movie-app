import TMDBApiService from "../api/tmdbApiService";
import generateApiKey from "../helpers/generateApiKey";

export const API_BASE_URL: string = import.meta.env.VITE_TMDB_API_SERVICE;
export const API_KEY: string = generateApiKey( import.meta.env.VITE_TMDB_API_KEY );
export const ACCESS_TOKEN: string = import.meta.env.VITE_TMDB_API_ACCESS_TOKEN;
export const tmdbService: TMDBApiService = new TMDBApiService(API_KEY, ACCESS_TOKEN);
