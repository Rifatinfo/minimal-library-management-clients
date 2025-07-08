import AllBooks from "@/pages/AllBooks";
import BorrowSummary from "@/pages/borrow/BorrowSummary";
import Home from "@/pages/Home";
import Mains from "@/roots/Mains";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mains/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/all-books",
        element : <AllBooks/>
      },
      {
        path : "/borrow-summary",
        element : <BorrowSummary/>
      },
    ]
  },
]);
export default router;