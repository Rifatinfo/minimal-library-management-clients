import { useState } from "react";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { BiX } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: "All Books", link: "/all-books" },
        { name: "Add Book", link: "/add-book" },
        { name: "Borrow Summary", link: "/borrow-summary" },
    ];

    return (
        <div className="w-full relative z-50">
            <header className="fixed top-0 left-0 w-full flex justify-between items-center px-5 py-3 bg-blue-50 shadow-md text-black z-50">
                <RouterLink to="/" className="flex items-center gap-3">
                    <img
                        className="h-[40px] w-auto"
                        src="https://via.placeholder.com/150x40?text=Logo"
                        alt="Logo"
                    />
                </RouterLink>

                {/* Desktop Menu */}
                <ul className="hidden xl:flex items-center gap-8 font-semibold text-xl">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <RouterLink
                                to={item.link}
                                className="hover:text-red-600 cursor-pointer"
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </RouterLink>
                        </li>
                    ))}
                </ul>

                {/* Search Icon */}
                <div className="hidden md:flex items-center gap-3">
                    <FiSearch className="text-black text-3xl font-semibold" />
                </div>

                {/* Mobile Menu Toggle */}
                <span
                    className="xl:hidden block text-2xl cursor-pointer mr-3"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <BiX /> : <RiMenuUnfold2Fill />}
                </span>


            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 h-screen z-40 bg-blue-50 bg-opacity-70 transition-opacity duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setOpen(false)}
            >
                <div
                    className={`absolute top-0 left-0 h-full bg-white w-[70%] max-w-[300px] rounded-r-xl shadow-lg transition-transform duration-500 ease-in-out ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {open && (
                        <span
                            className="absolute top-3 right-3 text-3xl text-black cursor-pointer"
                            onClick={() => setOpen(false)}
                        >
                            {open ? <BiX /> : <><span onClick={() => setOpen(true)}>
                                <RiMenuUnfold2Fill />
                            </span></>}
                        </span>
                    )}

                    <ul className="text-red-600 font-semibold flex flex-col pt-14 w-full">
                        {menuItems.map((item) => (
                            <li key={item.name} className="w-full list-none">
                                <RouterLink
                                    to={item.link}
                                    className="block w-full px-6 py-3 border-b cursor-pointer hover:bg-gray-200"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.name}
                                </RouterLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;