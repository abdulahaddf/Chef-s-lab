import React, { useContext } from "react";
import Hero from "../../shared/components/Hero";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../../shared/components/ChefCard";
import { AuthContext } from "../../provider/AuthProvider";
import Tips from "../../shared/components/Tips";
import Services from "../../shared/components/Services";

const Home = () => {
  const datas = useLoaderData();
  // console.log(data);
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <>
        <div class="flex justify-center items-center h-screen">
          <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <Hero></Hero>
      <h1 className="text-5xl text-purple-600 font-bold text-center my-10">
        Our Top Chefs
      </h1>
      <div className="grid md:grid-cols-2 gap-3 w-full place-items-center my-16">
        {datas.map((data) => (
          <ChefCard data={data} key={data.id}></ChefCard>
        ))}
      </div>
      <Services></Services>
      <Tips></Tips>
    </div>
  );
};

export default Home;
