import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Recipes = () => {
  const data = useLoaderData();
  const { id, name, picture, experience, recipes, totalLikes } = data;
  return (
    <div className="w-2/3 mx-auto">
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-72" src={picture} alt="Chef" />
      </figure>
      <div className="card-body w-96 self-center">
        <h2 className="card-title font-bold">{name}</h2>
        <p>
          <span className="font-semibold">Experience:</span> {experience}
        </p>
        <p>
          <span className="font-semibold">Number of recipes:</span>{" "}
          {recipes.length}
        </p>
        <div className="flex items-center gap-2">
          <FaRegThumbsUp></FaRegThumbsUp>
          {totalLikes}
        </div>
        <div className="card-action">
          <Link to={`/${id}`} className="btn btn-primary">
            View recipe
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Recipes;
