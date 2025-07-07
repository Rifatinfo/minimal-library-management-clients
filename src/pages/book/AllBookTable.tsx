import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { TableCell, TableRow } from "@/components/ui/table";
import type { IBook } from "@/types";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { deleteBook } from "@/redux/features/book/bookSlice";
interface IProps {
    book: IBook
}
const AllBookTable = ({ book }: IProps) => {
    const dispatch = useAppDispatch();
    return (
        <TableRow key={book.id} className="border-b hover:bg-muted transition-colors">
            <TableCell className="whitespace-nowrap px-4 py-2"><span className={cn("size-3 rounded-full inline-block ", {
                "bg-yellow-500": book.genre === "FICTION",
                "bg-gray-500": book.genre === "NON_FICTION",
                "bg-orange-400": book.genre === "SCIENCE ",
                "bg-indigo-600": book.genre === "HISTORY",
                "bg-red-600": book.genre === "BIOGRAPHY",
                "bg-red-500": book.genre === "FANTASY"
            })}></span> {book.title}</TableCell>
            <TableCell className="whitespace-nowrap px-4 py-2">{book.author}</TableCell>
            <TableCell className="whitespace-nowrap px-4 py-2">{book.genre.trim()}</TableCell>
            <TableCell className="whitespace-nowrap px-4 py-2 text-center">{book.copies}</TableCell>
            <TableCell className="whitespace-nowrap px-4 py-2 text-center">
                <span className={book.available ? "text-green-600 font-medium" : "text-red-500 font-medium"}>
                    {book.available === true ? "Yes" : "No"}
                </span>
            </TableCell>
            <TableCell className="text-center px-4 py-2">
                <FaPencil className="text-blue-500 hover:text-blue-700 text-lg cursor-pointer transition" />
            </TableCell>
            <TableCell className="text-center px-4 py-2">
                <MdDelete onClick={() => dispatch(deleteBook(book.id))} className="text-red-500 hover:text-red-700 text-xl cursor-pointer transition" />
            </TableCell>
        </TableRow>
    );
};

export default AllBookTable;