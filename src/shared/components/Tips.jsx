import React from "react";

const Tips = () => {
  return (
    <div>
      <div className="border w-11/12 mx-auto  my-10 p-5 md:px-10 shadow-xl border-purple-600">
        <h2 className="text-4xl text-purple-600 font-bold mb-4 text-center">
          Cooking Tips and Techniques
        </h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <span className="font-bold">Knife skills:</span> Choose the right
            knife for the task, hold it properly, and cut ingredients like a
            pro.
          </li>
          <li className="mb-2">
            <span className="font-bold">Basic cooking methods:</span> Learn how
            to roast, grill, sauté, fry, and bake different types of food.
          </li>
          <li className="mb-2">
            <span className="font-bold">Food safety:</span> Store, handle, and
            prepare food safely to prevent contamination and foodborne
            illnesses.
          </li>
          <li className="mb-2">
            <span className="font-bold">Seasoning and flavoring:</span> Use
            spices, herbs, and other seasonings to enhance the flavor of your
            dishes.
          </li>
          <li className="mb-2">
            <span className="font-bold">
              Kitchen organization and preparation:
            </span>{" "}
            Organize your kitchen, prepare ingredients efficiently, and clean up
            as you cook.
          </li>
          <li className="mb-2">
            <span className="font-bold">Ingredient preparation:</span> Learn how
            to prepare different types of ingredients, such as peeling and
            deveining shrimp or cutting and preparing vegetables.
          </li>
          <li className="mb-2">
            <span className="font-bold">
              Cooking techniques for specific cuisines:
            </span>{" "}
            Discover how to prepare dishes from different cuisines, such as
            sushi, stir-fry, or pasta.
          </li>
          <li className="mb-2">
            <span className="font-bold">Cooking for special diets:</span> Learn
            how to cook for people with specific dietary needs or restrictions,
            such as vegetarian, vegan, gluten-free, or low-carb diets.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tips;
