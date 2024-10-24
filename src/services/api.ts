import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { limit: number; offset: number }>({
      query: () => "products", // Fetch all products since fakestore API has limited pagination
      // Transform the response to simulate pagination
      transformResponse: (response: Product[], _, { limit, offset }) => {
        console.log("Full products:", response.length);
        return response.slice(offset, offset + limit);
      },
    }),
  }),
});

export const { useGetProductsQuery } = api;
