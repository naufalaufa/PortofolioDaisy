import { NavLink, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className="min-h-screen grid place-content-center place-items-center">
        <p>{error.error.message}</p>
        <NavLink
          to="/"
          className="bg-blue-500 p-2 rounded text-white mt-4 shadow-sm shadow-slate-500"
        >
          Back Home
        </NavLink>
      </div>
    </>
  );
};

export default Error;
