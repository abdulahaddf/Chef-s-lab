import React, { useState } from "react";
import { FaRegHeart, FaRegStar, FaRegThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const data = useLoaderData();
  const { name, picture, experience, recipes, totalLikes, bio } = data;
  const [fav, setFav] = useState(true);
  const notify = () =>{
    toast("The recipe is your favorite!");
    setFav(false)
};
  return (
    <div className="w-4/5 mx-auto">
      <div className="card md:card-side bg-base-100 p-5 shadow-xl my-10 border border-purple-600">
        <LazyLoad>
          <img className="w-96" src={picture} alt="Chef"/>
        </LazyLoad>
        <div className="card-body w-96 self-center">
          <h2 className="card-title font-bold">{name}</h2>
          <p>
            <span className="font-semibold">Bio:</span> {bio}
          </p>
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
        </div>
      </div>
      <div className="border p-2 shadow-md text-center text-3xl my-10">
        <h1>Recipes of {name}</h1>
      </div>
      <div className="md:flex self-center">
        {recipes.map((recipe) => (
          <>
            <div className=" border-2 border-purple-600 m-4 p-4 shadow-xl rounded-xl w-96">
              <div className="flex flex-col items-center justify-between h-full">
                <div>
                  <h1>
                    <span className="font-semibold">Recipe Name:</span>{" "}
                    {recipe.name}
                  </h1>
                  <p>
                    <span className="font-semibold">Ingredients:</span>{" "}
                    {recipe.ingredients}
                  </p>
                  <p>
                    <span className="font-semibold">Cooking Method:</span>{" "}
                    {recipe.method}
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold">Ratings:</span>{" "}
                    {recipe.ratings}<FaRegStar></FaRegStar>
                  </p>
                </div>
                <div>
                  <div
                    
                    className="flex items-center gap-2 font-bold mt-4"
                  >
                    <button
                       className="btn-purple" 
                       disabled={!fav}
                      onClick={notify}
                    >
                      <FaRegHeart></FaRegHeart> Add to Favorite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
     
    </div>
  );
};

export default Recipes;
