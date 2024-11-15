import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDatabase";

export const shopApi = createApi({
    reducerPath: 'shopApi',

    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

    tagTypes: ['profileImageGet'],

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

        postOrder: builder.mutation({
            query: ({...order}) => ({
                url: 'pedidos.json',
                method: 'POST',
                body: order,
            }),
        }),

        getProfileImage: builder.query({
            query: ( localId ) => `imagenesDePerfil/${localId}.json`,
            providesTags: ['profileImageGet']
        }),

        postProfileImage: builder.mutation({
            query: ({ localId, image }) => ({
                url: `imagenesDePerfil/${localId}.json`,
                method: 'PUT',
                body: {
                    image: image,
                }
            }),
            invalidatesTags: ['profileImageGet']
        }),
        
    }),
});

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductsByIdQuery, usePostOrderMutation, useGetProfileImageQuery, usePostProfileImageMutation  } = shopApi