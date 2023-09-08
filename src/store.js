import { configureStore } from "@reduxjs/toolkit";
import { bodyApi } from "./redux/bodyServices/bodyServices";

export const store = configureStore({
  reducer: {
    [bodyApi.reducerPath]: bodyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bodyApi.middleware),
});
