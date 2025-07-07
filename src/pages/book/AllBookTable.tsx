import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { TableCell, TableRow } from "@/components/ui/table";
import type { IBook } from "@/types";
import { cn } from "@/lib/utils";
import { useDeleteBookMutation } from "@/redux/api/itemCreateAPI";
import { Button } from "@/components/ui/button";

interface IProps {
  book: IBook;
  onEdit: () => void;
}

const AllBookTable = ({ book, onEdit }: IProps) => {
    const [deleteBook] =  useDeleteBookMutation();
  
  return (
    <TableRow className="border-b hover:bg-muted transition-colors">
      <TableCell className="whitespace-nowrap px-4 py-2">
        <span
          className={cn("size-3 rounded-full inline-block", {
            "bg-yellow-500": book.genre === "FICTION",
            "bg-gray-500": book.genre === "NON_FICTION",
            "bg-indigo-600": book.genre === "HISTORY",
            "bg-red-600": book.genre === "BIOGRAPHY",
            "bg-red-500": book.genre === "FANTASY",
          })}
        ></span>{" "}
        {book.title}
      </TableCell>
      <TableCell className="whitespace-nowrap px-4 py-2">{book.author}</TableCell>
      <TableCell className="whitespace-nowrap px-4 py-2">{book.genre.trim()}</TableCell>
      <TableCell className="whitespace-nowrap px-4 py-2 text-center">{book.copies}</TableCell>
      <TableCell className="whitespace-nowrap px-4 py-2 text-center">
        <span className={book.available ? "text-green-600 font-medium" : "text-red-500 font-medium"}>
          {book.available ? "Yes" : "No"}
        </span>
      </TableCell>
      <TableCell className="text-center py-2">
        <Button className="btn bg-blue-500 hover:text-blue-700 text-lg cursor-pointer transition">Borrow</Button>
      </TableCell>
      <TableCell className="text-center px-4 py-2">
        <FaPencil
          onClick={onEdit}
          className="text-blue-500 hover:text-blue-700 text-lg cursor-pointer transition"
        />
      </TableCell>
      
      <TableCell className="text-center px-4 py-2">
        <MdDelete
            onClick={() => deleteBook({ bookId: book._id })}
          className="text-red-500 hover:text-red-700 text-xl cursor-pointer transition"
        />
      </TableCell>
    </TableRow>
  );
};

export default AllBookTable;
