import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Book } from './types';

export interface Response {
  docs: Book[];
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  q: string;
}

export const bookSearchListsApi = createApi({
  reducerPath: 'bookSearchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://openlibrary.org/',
  }),
  keepUnusedDataFor: 30,
  tagTypes: ['BOOKS'],

  endpoints: (builder) => ({
    getBookSearchResults: builder.query<
      Response,
      { title: string; page?: number; }
    >({
      query: ({ title, page = 1 }) => ({
        url: 'search.json',
        params: {
          title: title,
          page,
          limit: 20,
        },
      }),
      providesTags: ['BOOKS'],
    }),
  }),
})

export const { useGetBookSearchResultsQuery } = bookSearchListsApi;
