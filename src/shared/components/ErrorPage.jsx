import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          className="w-1/2"
          src="https://i.ibb.co/hCWxqd8/error.jpg"
          alt="error"
        />

        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-purple-400 text-white text-xl my-4 "
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
