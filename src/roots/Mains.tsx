import Navbar from "@/Navbar/Navbar";
import { Outlet } from "react-router";

const Mains = () => {
    return (
        <div>

            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Mains;