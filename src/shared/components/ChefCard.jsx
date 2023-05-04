import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaRegThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ data }) => {
  const { id, name, picture, experience, recipes, totalLikes } = data;

  return (
    <div className="md:w-2/3">
      <div className="card md:card-side bg-base-100 p-2 shadow-xl self-center">
        <LazyLoad>
          <img className="md:w-72 rounded-md" src={picture} alt="Chef" />
        </LazyLoad>

        <div className="card-body p-2 md:p-8 w-96 self-center">
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
              View recipes <FaArrowRight className="ml-2"></FaArrowRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
