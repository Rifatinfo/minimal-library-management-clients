import { useState } from "react";
import { AddModalBook } from "./book/AddModalBook";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AllBookTable from "./book/AllBookTable";
import { useGetBooksQuery } from "@/redux/api/itemCreateAPI";
import type { IBook } from "@/types";
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
        return <p>Loading...</p>;
    }

    return (
        <div className="mt-20 max-w-7xl mx-auto">
            <div className="flex justify-end items-center">
                <AddModalBook />
            </div>

            <div className="rounded-md border mt-6 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="px-4 py-2">Title</TableHead>
                            <TableHead className="px-4 py-2">Author</TableHead>
                            <TableHead className="px-4 py-2">Genre</TableHead>
                            <TableHead className="px-4 py-2 text-center">Copies</TableHead>
                            <TableHead className="px-4 py-2 text-center">ISBN</TableHead>
                            <TableHead className="px-4 py-2 text-center">Available</TableHead>
                            <TableHead className="px-4 py-2 text-center">Borrow</TableHead>
                            <TableHead className="px-4 py-2 text-center">Edit</TableHead>
                            <TableHead className="px-4 py-2 text-center">Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.data?.map((book: IBook) => (
                            <AllBookTable
                                key={book._id}
                                book={book}
                                onEdit={() => handleEdit(book)}
                                setSelectedBorrow={setSelectedBorrow}
                            />
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
    );
};

export default AllBooks;
