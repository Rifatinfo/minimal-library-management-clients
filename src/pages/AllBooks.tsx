
import { AddModalBook } from "./book/AddModalBook";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AllBookTable from "./book/AllBookTable";
import { useGetBooksQuery } from "@/redux/api/itemCreateAPI";
import type { IBook } from "@/types";
import { useState } from "react";
import UpdateModalBook from "./updateBook/UpdateModalBook";

const AllBooks = () => {
    const [open, setOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState<IBook | null>(null);

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
                            {data.data.map((book: IBook) => (
                                <AllBookTable book={book} key={book._id}  onEdit={() => handleEdit(book)} />
                            ))}
                        </TableBody>
                    </Table>
                        {selectedBook && (
                            <UpdateModalBook open={open} setOpen={setOpen} book={selectedBook} />
                        )}
                </div>
            </div>

        </div>
    );
};

export default AllBooks;