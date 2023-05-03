import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ data }) => {
    const {id,name,picture,experience,recipes} = data;

  return (
    <div >
      
        <div className="card card-side bg-base-100 shadow-xl w-96">
      <figure>
        <img className="w-72"
          src={picture}
          alt="Chef"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <Link to={`/${id}`} className="btn btn-primary">View recipe</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChefCard;
