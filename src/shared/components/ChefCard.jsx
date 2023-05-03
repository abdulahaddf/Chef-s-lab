import React from "react";
import { Link } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ data }) => {
  const { id, name, picture, experience, recipes, totalLikes } = data;

  return (
    <div className="w-2/3">
      <div className="card md:card-side bg-base-100 p-2 shadow-xl">
        <LazyLoad >
          <img className="w-72" src={picture} alt="Chef" />
        </LazyLoad>
        
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
            <Link to={`/${id}`} className="btn-purple">
              View recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
