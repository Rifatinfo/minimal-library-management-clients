import Mains from "@/roots/Mains";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mains/>,
  },
]);
export default router;