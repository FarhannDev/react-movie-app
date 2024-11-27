import axios, { AxiosInstance, AxiosResponse, CancelTokenSource } from 'axios';
import { API_BASE_URL } from '../config/app.config';

export default class TMDBApiService {
  private apiClient: AxiosInstance;
  private apiKey: string;
  private accessToken: string;
  private cancelTokenSource?: CancelTokenSource; 

  constructor(apiKey: string, accessToken: string) {
    this.apiKey = apiKey;
    this.accessToken = accessToken;
    this.apiClient = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.accessToken}`
        },
    })
  }

  private getDefaultParams() {
    return {
      api_key: this.apiKey,
    };
  }

  private cancelPreviousRequest() {
    if (this.cancelTokenSource) {
      this.cancelTokenSource.cancel('Previous request canceled');
    }
    this.cancelTokenSource = axios.CancelToken.source(); // Buat token baru
  }

  async getMovie(movieId: number, lang="en-US")  {
    this.cancelPreviousRequest(); 

    try {
      const response: AxiosResponse = await this.apiClient.get(`/movie/${movieId}?language=${lang}`, {
        params: {
          ...this.getDefaultParams(),
          lang
        },
        cancelToken: this.cancelTokenSource?.token,
      }); 

      const responseData = await response.data;
      
      return responseData;

    } catch (error) {
      if (axios.isCancel(error)) {
        console.warn('Request canceled:', error.message);
      } 

      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }
  
  async getRecomendationMovie(movieId: number, page: number =1, lang="en-US") {
    this.cancelPreviousRequest(); 

    try {
      const response: AxiosResponse = await this.apiClient.get(`/movie/${movieId}/recommendations?language=${lang}&page=${page}`, {
        params: {
          ...this.getDefaultParams(),
          page,
          lang
        },
        cancelToken: this.cancelTokenSource?.token,
      });

      const responseData = await response.data;

      const { results } = responseData as ResponseData;

      return results;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (axios.isCancel(error)) {
          console.warn('Request canceled:', error.message);
        } 

        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  async getReviewMovie(movieId: number, page: number =1, lang="en-US") {
    this.cancelPreviousRequest(); 

    try {
      const response: AxiosResponse = await this.apiClient.get(`/movie/${movieId}/reviews?language=${lang}&page=${page}`, {
        params: {
          ...this.getDefaultParams(),
          page,
          lang
        },
        cancelToken: this.cancelTokenSource?.token,
      });

      const responseData = await response.data;
      const { results } = responseData as ResponseData;

      return results;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.warn('Request canceled:', error.message);
      } 

      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  async getPopularMovies(page: number = 1, lang="en-US")  {
    this.cancelPreviousRequest(); 

    try {
      const response: AxiosResponse = await this.apiClient.get<ResponseData>(`/movie/popular?language=${lang}&page=${page}`, {
        params: {
          ...this.getDefaultParams(),
          page,
          lang
        },
        cancelToken: this.cancelTokenSource?.token,
      });

      const responseData = await response.data;

      const { results } = responseData as ResponseData;

    
      return results;

    } catch (error) {
      if (axios.isCancel(error)) {
        console.warn('Request canceled:', error.message);
      } 

      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  async getNowPlayingMovies(page: number = 1, lang="en-US")  {
    this.cancelPreviousRequest(); 

    try {
      const response: AxiosResponse = await this.apiClient.get<ResponseData>(`/movie/now_playing?language=${lang}&page=${page}`, {
        params: {
          ...this.getDefaultParams(),
          page,
          lang
        },
        cancelToken: this.cancelTokenSource?.token,
      });

      const responseData = await response.data;

      const { results } = responseData as ResponseData;

      return results;

    } catch (error) {
      if (axios.isCancel(error)) {
        console.warn('Request canceled:', error.message);
      } 

      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  async getTopRatedMovies(page: number = 1, lang="en-US")  {
    this.cancelPreviousRequest(); 

    try {
      const response: AxiosResponse = await this.apiClient.get<ResponseData>(`/movie/top_rated?language=${lang}&page=${page}`, {
        params: {
          ...this.getDefaultParams(),
          page,
          lang
        },
        cancelToken: this.cancelTokenSource?.token,
      });

      const responseData = await response.data;

      const { results } = responseData as ResponseData;

      return results;

    } catch (error) {
      if (axios.isCancel(error)) {
        console.warn('Request canceled:', error.message);
      } 

      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  async getUpcomingMovies(page: number = 1, lang="en-US")  {
    this.cancelPreviousRequest(); 

    try {
      const response: AxiosResponse = await this.apiClient.get<ResponseData>(`/movie/upcoming?language=${lang}&page=${page}`, {
        params: {
          ...this.getDefaultParams(),
          page,
          lang
        },
        cancelToken: this.cancelTokenSource?.token,
      });

      const responseData = await response.data;

      const { results } = responseData as ResponseData;

      return results;

    } catch (error) {
      if (axios.isCancel(error)) {
        console.warn('Request canceled:', error.message);
      } 

      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  } 


  async getLatestMovies(page: number, lang='en-US') {
    this.cancelPreviousRequest(); 

    try {
      const response: AxiosResponse = await this.apiClient.get<ResponseData>(`/movie/latest?language=${lang}&page=${page}`, {
        params: {
          ...this.getDefaultParams(),
          page,
          lang
        },
        cancelToken: this.cancelTokenSource?.token,
      });

      const responseData = await response.data;

      const { results } = responseData as ResponseData;

      return results;

    } catch (error) {
      if (axios.isCancel(error)) {
        console.warn('Request canceled:', error.message);
      } 

      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }

  }
}




