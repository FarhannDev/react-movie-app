export type OriginalCountry = 'US' | 'ID' | 'EN' | 'FR' | 'JP' | 'IN';
export type OriginalLanguage =
  | 'en' // English
  | 'es' // Spanish
  | 'fr' // French
  | 'de' // German
  | 'it' // Italian
  | 'ja' // Japanese
  | 'ko' // Korean
  | 'zh' // Chinese (Simplified)
  | 'ar' // Arabic
  | 'hi' // Hindi
  | 'ru' // Russian
  | 'id' // Indonesian
  | 'pt' // Portuguese
  | string; // Allows for other languages not explicitly listed

export type ProductionCompany = {
    id: number,
    logo_path: string,
    name: string,
    origin_country: OriginalCountry
}
export type ProductionCountry = {
    iso_3166_1: OriginalCountry,
    name: string
}
export interface Genre {
    id: number;
    name: string
  }

export interface Movie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: Pick<Genre, 'id'>,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: string,
  vote_average: number,
  vote_count: number
}

export type Collection = {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string,
}

export type SpokenLanguage =   {
    english_name: string,
    iso_639_1: OriginalLanguage,
}

export interface MovieDetail {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: Collection,
    budget: number,
    genres: Genre,
    homepage: string,
    id: number,
    imdb_id: string,
    origin_country: OriginalCountry,
    original_language: OriginalLanguage,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: ProductionCompany
    production_countries: ProductionCountry
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: SpokenLanguage,
    status: string
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

