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
  setSelectedBorrow: (value: IBook | null) => void;
}

const AllBookTable = ({ book, onEdit, setSelectedBorrow }: IProps) => {
  const [deleteBook] = useDeleteBookMutation();

  return (
    <TableRow className="border-b hover:bg-muted transition-colors">
      <TableCell className="px-4 py-2 whitespace-nowrap flex items-center gap-2">
        <span
          className={cn("w-3 h-3 rounded-full inline-block", {
            "bg-yellow-500": book.genre === "FICTION",
            "bg-gray-500": book.genre === "NON_FICTION",
            "bg-indigo-600": book.genre === "HISTORY",
            "bg-red-600": book.genre === "BIOGRAPHY",
            "bg-red-500": book.genre === "FANTASY",
          })}
        ></span>
        {book.title}
      </TableCell>
      <TableCell className="px-4 py-2 whitespace-nowrap">{book.author}</TableCell>
      <TableCell className="px-4 py-2 whitespace-nowrap">{book.genre.trim()}</TableCell>
      <TableCell className="px-4 py-2 text-center">{book.copies}</TableCell>
      <TableCell className="px-4 py-2 text-center">{book.isbn}</TableCell>
      <TableCell className="px-4 py-2 text-center">
        <span className={book.available ? "text-green-600 font-medium" : "text-red-500 font-medium"}>
          {book.available ? "Yes" : "No"}
        </span>
      </TableCell>
      <TableCell className="px-4 py-2 text-center">
        <Button
          onClick={() => setSelectedBorrow(book)}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
        >
          Borrow
        </Button>
      </TableCell>
      <TableCell className="px-4 py-2 text-center">
        <FaPencil
          onClick={onEdit}
          className="text-blue-500 hover:text-blue-700 text-lg cursor-pointer transition"
        />
      </TableCell>
      <TableCell className="px-4 py-2 text-center">
        <MdDelete
          onClick={() => deleteBook({ bookId: book._id })}
          className="text-red-500 hover:text-red-700 text-xl cursor-pointer transition"
        />
      </TableCell>
    </TableRow>
  );
};

export default AllBookTable;
