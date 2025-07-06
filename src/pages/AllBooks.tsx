import { filterBooks, selectBooks } from "@/redux/features/book/bookSlice";
import { useAppSelector } from "@/redux/hooks/hooks";
import { AddModalBook } from "./book/AddModalBook";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AllBookTable from "./book/AllBookTable";

const AllBooks = () => {
    const books = useAppSelector(selectBooks);
    const Books = useAppSelector(filterBooks);
    console.log(books, Books);

    return (
        <div className="mt-20 max-w-7xl mx-auto">
            <div className="">
                <div className='flex justify-end items-center'>
                    <AddModalBook />
                </div>
            </div>
            <div>
                <div className="rounded-md border mt-6">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Author</TableHead>
                                <TableHead>Genre</TableHead>
                                <TableHead>Copies</TableHead>
                                <TableHead>Available</TableHead>
                                <TableHead>Edit</TableHead> 
                                <TableHead>Delete</TableHead> 
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {books.map((book) => (
                               <AllBookTable book={book} key={book.id}/>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

        </div>
    );
};

export default AllBooks;