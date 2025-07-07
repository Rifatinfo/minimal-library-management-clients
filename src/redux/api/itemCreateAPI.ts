import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
    tagTypes : ["books"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "books",
            providesTags : ["books"]
        }),
        addBooks : builder.mutation({
            query : (body) => ({
                url : "books",
                method : "POST",
                body,
            }),
            invalidatesTags : ["books"]
        })
    })
})

export const { useGetBooksQuery , useAddBooksMutation} = booksApi;