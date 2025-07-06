import { filterBooks, selectBooks } from "@/redux/features/book/bookSlice";
import { useAppSelector } from "@/redux/hooks/hooks";
// import BookCard from "./book/BookCard";
import { AddModalBook } from "./book/AddModalBook";

const AllBooks = () => {
    const books = useAppSelector(selectBooks);
    const Books = useAppSelector(filterBooks);
    console.log(books, Books);

    return (
        <div className="mt-20 max-w-7xl mx-auto">
            <div className="">
                <div className='flex justify-end items-center'>
                    <AddModalBook/>
                </div>
            </div>
            <div>
                {/* <div className="grid grid-cols-4 gap-3 mt-3">
                    {books.map((book) => <BookCard book={book} key={book.id} />)}
                </div> */}
            </div>

        </div>
    );
};

export default AllBooks;