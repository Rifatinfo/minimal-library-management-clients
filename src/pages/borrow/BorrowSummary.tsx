import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useGetBorrowQuery } from "@/redux/api/itemCreateAPI";
import type { IBook } from "@/types";

const BorrowSummary = () => {
  const { data, isLoading, error } = useGetBorrowQuery(undefined);
  const borrowList = data?.data || [];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Failed to load borrow summary.</p>;
  }

  if (!Array.isArray(borrowList) || !borrowList.length) {
    return <p>No borrow data available.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto md:mt-40 mt-20">
      <div className="rounded-md border mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Total Quantity</TableHead>
              <TableHead>ISBN</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {borrowList.map((borrow: { book: IBook; totalQuantity: number }, index: number) => (
              <TableRow key={index} className="border-b hover:bg-muted transition-colors">
                <TableCell className="whitespace-nowrap py-2">
                  <span
                    className={cn("size-3 rounded-full inline-block", {
                      "bg-yellow-500": borrow.book.genre === "FICTION",
                      "bg-gray-500": borrow.book.genre === "NON_FICTION",
                      "bg-indigo-600": borrow.book.genre === "HISTORY",
                      "bg-red-600": borrow.book.genre === "BIOGRAPHY",
                      "bg-red-500": borrow.book.genre === "FANTASY",
                    })}
                  ></span>
                  {borrow.book.title}
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-2">{borrow.book.isbn}</TableCell>
                <TableCell className="whitespace-nowrap px-4 py-2">{borrow.totalQuantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BorrowSummary;
