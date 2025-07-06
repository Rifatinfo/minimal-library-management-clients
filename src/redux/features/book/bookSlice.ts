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
        {
            id: "1",
            Title: "The Great Gatsby",
            Author: "F. Scott Fitzgerald",
            ISBN: "9780743273565",
            Description: "A classic novel about the illusions of the American Dream in the 1920s.",
            Copies: 0,
            Available: false,
            Genre: "Classic"
        },
        {
            id: "2",
            Title: "Wuthering Heights",
            Author: "Emily Brontë",
            ISBN: "9780141439556",
            Description: "A haunting tale of love, revenge, and passion on the English moors.",
            Copies: 3,
            Available: true,
            Genre: "Romance"
        },
        {
            id: "3",
            Title: "Frankenstein",
            Author: "Mary Shelley",
            ISBN: "9780486282114",
            Description: "A Gothic horror novel exploring the dangers of unchecked scientific ambition.",
            Copies: 4,
            Available: true,
            Genre: "Horror"
        },
        {
            id: "4",
            Title: "Murder on the Orient Express",
            Author: "Agatha Christie",
            ISBN: "9780062073495",
            Description: "Detective Hercule Poirot solves a murder aboard a luxurious train.",
            Copies: 6,
            Available: true,
            Genre: "Mystery"
        },
        {
            id: "5",
            Title: "Dune",
            Author: "Frank Herbert",
            ISBN: "9780441172719",
            Description: "A science fiction epic about politics, ecology, and prophecy on a desert planet.",
            Copies: 8,
            Available: true,
            Genre: "Science "
        },
        {
            id: "6",
            Title: "Jane Eyre",
            Author: "Charlotte Brontë",
            ISBN: "9780141441146",
            Description: "A coming-of-age romance wrapped in mystery and moral growth.",
            Copies: 4,
            Available: true,
            Genre: "Literary"
        },
        {
            id: "7",
            Title: "Gone with the Wind",
            Author: "Margaret Mitchell",
            ISBN: "9781451635621",
            Description: "A sweeping historical romance set during the American Civil War.",
            Copies: 5,
            Available: true,
            Genre: "Historical "
        },
        {
            id: "8",
            Title: "The Hobbit",
            Author: "J.R.R. Tolkien",
            ISBN: "9780345339683",
            Description: "Bilbo Baggins joins a group of dwarves on a dangerous quest to reclaim treasure.",
            Copies: 7,
            Available: true,
            Genre: "Fantasy"
        },
        {
            id: "9",
            Title: "The Call of the Wild",
            Author: "Jack London",
            ISBN: "9780141321059",
            Description: "A sled dog fights for survival and embraces his primal instincts in the Yukon.",
            Copies: 3,
            Available: true,
            Genre: "Adventure"
        },
        {
            id: "10",
            Title: "Lonesome Dove",
            Author: "Larry McMurtry",
            ISBN: "9781439195260",
            Description: "A classic Western following two retired Texas Rangers on a cattle drive.",
            Copies: 2,
            Available: true,
            Genre: "Western"
        }

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
        state.books.push(bookData)
       }
    }
})

export const selectBooks = (state : RootState) => {
    return state.todoBooks.books;
}
export const filterBooks = (state : RootState) => {
    return state.todoBooks.filter;
}

export const {addBook} = bookSlice.actions; 
export default bookSlice.reducer;