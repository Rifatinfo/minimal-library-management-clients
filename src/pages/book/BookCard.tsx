import { MdDelete } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import type { IBook } from "@/types";
import { cn } from "@/lib/utils";

interface IProps {
    book: IBook
}

const BookCard = ({ book }: IProps) => {
    return (
        <div>
            <div>
                <div className="max-w-xs rounded-xl overflow-hidden shadow-lg border border-blue-50 p-4 bg-white">
                    <img src="https://gramentheme.com/html/bookle/assets/img/book/01.png" alt="Flovely And Unicorn Erna" className="w-full h-96 object-cover rounded-md" />
                    <p className="text-sm text-gray-400 mt-3"><span className={cn("size-3 rounded-full inline-block ", {
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
                    })}></span> {book.Title}</p>
                    <h2 className="text-lg font-semibold text-slate-900">Flovely And Unicorn Erna</h2>
                    <div className="flex justify-between items-center gap-2">
                        <div className="flex items-center gap-2">
                            <img src="https://gramentheme.com/html/bookle/assets/img/book/01.png" alt="Author" className="w-6 h-6 rounded-full" />
                            <span className="text-sm text-gray-600"> {book.Author}</span>
                        </div>
                        <div className="flex items-center gap-2 my-2">
                            <span className="font-bold text-blue-500">{book.Available === true ? `Available (${book.Copies})` : "UnAvailable"}</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-red-500">
                        <p className="bg-blue-200 rounded-full p-2.5"><FaPencil className="text-xl" /></p>
                        <p className="bg-blue-200 rounded-full p-2"><MdDelete className="text-2xl" /></p>
                    </div>
                    <button className="w-full mt-4 bg-blue-100 text-blue-800 hover:bg-blue-200 font-semibold py-2 rounded-lg transition">
                        Add To Borrow
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BookCard;