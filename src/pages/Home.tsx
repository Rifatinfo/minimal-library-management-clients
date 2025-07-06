import { useAppSelector } from "@/redux/hooks/hooks";
import BookCard from "./book/BookCard";
import { selectBooks } from "@/redux/features/book/bookSlice";

const Home = () => {
    const books = useAppSelector(selectBooks);

    return (
        <div className="mt-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-3 mt-3">
                {books.map((book) => <BookCard book={book} key={book.id} />)}
            </div>
        </div>
    );
};

export default Home;