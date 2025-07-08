import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
    tagTypes : ["books", "borrow"],
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
        }),
        updateBook : builder.mutation({
            query : ({bookId, body}) => ({
              url : `books/${bookId}`,
              method : "PATCH",
              body,
            }),
            invalidatesTags : ["books"]
        }),
        deleteBook : builder.mutation({
            query : ({bookId}) => ({
                url : `books/${bookId}`,
                method : "DELETE"
            }),
            invalidatesTags : ["books"]
        }),
        addBorrow : builder.mutation({
            query : (body) => ({
                url : "borrow",
                method : "POST",
                body
            }),
            invalidatesTags : ["books"]
        })
    })
})

export const { useGetBooksQuery , useAddBooksMutation, useUpdateBookMutation, useDeleteBookMutation, useAddBorrowMutation} = booksApi;