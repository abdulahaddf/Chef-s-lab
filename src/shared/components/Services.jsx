import React from "react";
import LazyLoad from "react-lazy-load";

const Services = () => {
  return (
    <div className="border shadow-lg border-purple-600 my-32 bg-base-100 w-11/12 mx-auto">
      <h2 className="text-4xl text-purple-600  font-bold my-5 text-center">
        Our Services
      </h2>
      <div className="md:flex justify-evenly py-10 ">
        <div className="card card-compact md:w-1/5 py-5 text-centerbg-base-100 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
          <LazyLoad>
            <img
              className="w-24 h-32 mx-auto"
              src="https://i.ibb.co/zXT09gK/cheff-removebg-preview.png"
              alt="Shoes"
            />
          </LazyLoad>
          <div className="card-body">
            <h2 className="text-lg font-bold">Providing World's Best Chef</h2>
          </div>
        </div>
        <div className="card card-compact md:w-1/5 py-5 text-centerbg-base-100 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
          <LazyLoad>
            <img
              className="w-24 h-32 mx-auto"
              src="https://i.ibb.co/Bz9mzKw/food-removebg-preview.png"
              alt="Shoes"
            />
          </LazyLoad>
          <div className="card-body">
            <h2 className="text-lg font-bold">Providing World Class Food</h2>
          </div>
        </div>

        <div className="card card-compact md:w-1/5 py-5 text-centerbg-base-100 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
          <LazyLoad>
            <img
              className="w-24 h-32 mx-auto"
              src="https://i.ibb.co/4dZcvP1/tutor-removebg-preview.png"
              alt="Shoes"
            />
          </LazyLoad>
          <div className="card-body">
            <h2 className="text-lg font-bold">Providing Video Tutorials</h2>
          </div>
        </div>

        <div className="card card-compact md:w-1/5 py-5 text-centerbg-base-100 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
          <LazyLoad>
            <img
              className="h-32 mx-auto"
              src="https://i.ibb.co/TBChNCL/tipss-removebg-preview.png"
              alt="Shoes"
            />
          </LazyLoad>
          <div className="card-body">
            <h2 className="text-lg font-bold">Sharing Tips and Techniques</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
