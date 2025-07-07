import type { RootState } from "@/redux/store";
import type { IBook } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    books: IBook[],
    filter : "All" | "Classic" | "Literary" | "Historical " | "Mystery" | "Thriller" | "Horror" | "Science " | "Fantasy" | "Adventure" | "Romance" | "Western" ;
}

const initialState: InitialState = {
    books: [
    ],
    filter : "All"
}
const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
       addBook : (state, action : PayloadAction<IBook>) =>{
        const id = uuidv4();
        const ISBN = uuidv4(); 
        const bookData = {
            ...action.payload,
            id,
            Available : true,
            ISBN
        } 
        state.books.push(bookData);
       },

       deleteBook : (state, action : PayloadAction<string>) => {
        state.books = state.books.filter((book) => book.id !== action.payload)
       }
    }
})

export const selectBooks = (state : RootState) => {
    return state.todoBooks.books;
}
export const filterBooks = (state : RootState) => {
    return state.todoBooks.filter;
}

export const {addBook, deleteBook} = bookSlice.actions; 
export default bookSlice.reducer;