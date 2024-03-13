import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Blog, Error, LandingHome, Personal, Project } from "./pages";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const App = () => {
  const { dark } = useContext(GlobalContext);
  const router = createBrowserRouter([
    {
      path: "/",
      name: "landinghome",
      element: <LandingHome />,
      errorElement: <Error />,
    },
    {
      path: "/project",
      name: "project",
      element: <Project />,
    },
    {
      path: "/personal",
      name: "personal",
      element: <Personal />,
    },
    {
      path: "/blog",
      name: "blog",
      element: <Blog />,
    },
  ]);
  return (
    <>
      <Navbar />
      <div
        className={
          dark
            ? "bg-black text-white duration-100"
            : "bg-white text-black duration-100"
        }
      >
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
