import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center pb-48">
      <div className="text-center text-black">
        <img src="/assets/images/error_404.png" alt="error" className="w-[45rem] " />
        <h1 className="text-xl mb-2">The page you are looking for does not exist</h1>
        <div className="flex gap-3 justify-center items-center">
          <Link className="underline text-teal-400" to="/">
            Back to home{" "}
          </Link>
          <Link className="underline text-red-600" to="/report-problem">
            Report a problem{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
