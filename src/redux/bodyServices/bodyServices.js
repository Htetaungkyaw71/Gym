import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bodyApi = createApi({
  reducerPath: "bodyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://exercisedb.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set(
        "X-RapidAPI-Key",
        "323981dd4dmsh72808052c47bfcep155cdejsn254bd6f35f87",
      );
      headers.set("X-RapidAPI-Host", "exercisedb.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBodyList: builder.query({
      query: () => `exercises/bodyPartList`,
      transformResponse: (response) => response,
    }),
    getBodyDetail: builder.query({
      query: (name) => `exercises/bodyPart/${name}`,
      transformResponse: (response) => response,
    }),
    getTargetDetail: builder.query({
      query: (name) => `exercises/target/${name}`,
      transformResponse: (response) => response,
    }),
    getExercise: builder.query({
      query: (id) => `exercises/exercise/${id}`,
      transformResponse: (response) => response,
    }),
    getAllExercises: builder.query({
      query: () => `exercises/`,
      transformResponse: (response) => response,
    }),
    getTargetList: builder.query({
      query: () => `exercises/targetList`,
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useGetBodyListQuery,
  useGetBodyDetailQuery,
  useGetExerciseQuery,
  useGetAllExercisesQuery,
  useGetTargetListQuery,
  useGetTargetDetailQuery,
} = bodyApi;
