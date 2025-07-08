
import { AddModalBook } from "./book/AddModalBook";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AllBookTable from "./book/AllBookTable";
import { useGetBooksQuery } from "@/redux/api/itemCreateAPI";
import type { IBook } from "@/types";
import { useState } from "react";
import UpdateModalBook from "./updateBook/UpdateModalBook";
import { BorrowModal } from "./borrow/BorrowModal";

const AllBooks = () => {
    const [open, setOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
    const [selectedBorrow, setSelectedBorrow] = useState<IBook | null>(null);

    const handleEdit = (book: IBook) => {
        setSelectedBook(book);
        setOpen(true);
    };
    const { data, isLoading } = useGetBooksQuery(undefined);
    if (isLoading) {
        return <p>loading....</p>
    }
    console.log(data.data);


    return (
        <div className="mt-20 max-w-7xl mx-auto">
            <div className="">
                <div className='flex justify-end items-center'>
                    <AddModalBook />
                </div>
            </div>
            <div>
                <div className="rounded-md border mt-6 ">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Author</TableHead>
                                <TableHead>Genre</TableHead>
                                <TableHead className="md:px-24 px-10">Copies</TableHead>
                                <TableHead className="md:px-24 px-10">Available</TableHead>
                                <TableHead className="md:px-24 px-10">Borrow</TableHead>
                                <TableHead>Edit</TableHead>
                                <TableHead>Delete</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.data.map((book: IBook) => (
                                <AllBookTable book={book} key={book._id}  onEdit={() => handleEdit(book)} setSelectedBorrow={setSelectedBorrow} />
                            ))}
                        </TableBody>
                    </Table>
                        {selectedBook && (
                            <UpdateModalBook open={open} setOpen={setOpen} book={selectedBook} />
                        )}
                        {selectedBorrow && (
                            <BorrowModal selectedBorrow={selectedBorrow} setSelectedBorrow={setSelectedBorrow} />
                        )}
                </div>
            </div>

        </div>
    );
};

export default AllBooks;