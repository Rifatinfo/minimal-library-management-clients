import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { TableCell, TableRow } from "@/components/ui/table";
import type { IBook } from "@/types";
import { cn } from "@/lib/utils";
interface IProps {
    book: IBook
}
const AllBookTable = ({ book }: IProps) => {
    return (
        <TableRow key={book.id} className="border-b hover:bg-muted transition-colors">
            <TableCell className="whitespace-nowrap px-4 py-2"><span className={cn("size-3 rounded-full inline-block ", {
                "bg-yellow-500": book.Genre === "Classic",
                "bg-gray-500": book.Genre === "Literary",
                "bg-orange-400": book.Genre === "Historical ",
                "bg-indigo-600": book.Genre === "Mystery",
                "bg-red-600": book.Genre === "Thriller",
                "bg-red-500": book.Genre === "Horror",
                "bg-cyan-500": book.Genre === "Science ",
                "bg-purple-500": book.Genre === "Fantasy",
                "bg-green-500": book.Genre === "Adventure",
                "bg-blue-500": book.Genre === "Romance",
                "bg-amber-700": book.Genre === "Western"
            })}></span> {book.Title}</TableCell>
            <TableCell className="whitespace-nowrap px-4 py-2">{book.Author}</TableCell>
            <TableCell className="whitespace-nowrap px-4 py-2">{book.Genre.trim()}</TableCell>
            <TableCell className="whitespace-nowrap px-4 py-2 text-center">{book.Copies}</TableCell>
            <TableCell className="whitespace-nowrap px-4 py-2 text-center">
                <span className={book.Available ? "text-green-600 font-medium" : "text-red-500 font-medium"}>
                    {book.Available === true ? "Yes" : "No"}
                </span>
            </TableCell>
            <TableCell className="text-center px-4 py-2">
                <FaPencil className="text-blue-500 hover:text-blue-700 text-lg cursor-pointer transition" />
            </TableCell>
            <TableCell className="text-center px-4 py-2">
                <MdDelete className="text-red-500 hover:text-red-700 text-xl cursor-pointer transition" />
            </TableCell>
        </TableRow>

    );
};

export default AllBookTable;