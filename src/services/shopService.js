import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl} from "../databases/realtimeDatabase";

export const shopApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `categorias.json`,
        }),
        getProductsByCategory: builder.query({
            query: (category) => `productos.json?orderBy="category"&equalTo="${category}"`, 
            transformResponse: (res) => {
                const responseTransformed = Object.values(res);
                return responseTransformed;
            }
        }),
        getProductsById: builder.query({
            query: (productId) => `productos.json?orderBy="id"&equalTo=${productId}`,
            transformResponse: (res) => {
                const responseTransformed = Object.values(res);
                if(responseTransformed.length > 0) {
                    return responseTransformed[0];
                }
                return responseTransformed;
            }
        }),
    }),
});

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductsByIdQuery, } = shopApi