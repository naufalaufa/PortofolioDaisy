import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Blog, Error, LandingHome, Personal, Project } from "./pages";

const App = () => {
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
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
