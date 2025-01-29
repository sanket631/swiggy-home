import React from "react";
import { useState, useEffect } from "react";

function Online_restaurants() {
  const [restaurants, setrestaurants] = useState([]);

  const fetchtoprestaurant = async () => {
    try {
      const response = await fetch("/data/Restaurant_chain.json");
      const jsondata = await response.json();
      setrestaurants(jsondata);
    } catch (error) {
      console.error("Error fetching restaurants data:", error);
      setrestaurants([]);
    }
  };

  useEffect(() => {
    fetchtoprestaurant();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold ml-10">More on Swiggy</div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {restaurants.map((rest, index) => (
          <div
            className="w-[150px] shrink-0 mx-2 duration-500 flex flex-col items-start"
            key={index}
          >
            <div className="relative w-full h-[150px]">
              <img
                className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
                src={`/images/Restaurants/${rest.image}`}
                alt={rest.name}
              />
              <div className="absolute w-full h-full top-0 flex items-end p-2 bg-gradient-to-t from-black via-transparent to-transparent text-white rounded-lg">
                {rest.offer}
              </div>
            </div>
            <div className="mt-2 font-medium text-gray-800">{rest.title}</div>
            <div className="text-sm font-semibold">
              ⭐ {rest.rating}{" "}
              <span>
                {rest.minTime}-{rest.maxTime} mins
              </span>
            </div>
            <div className="mt-2 font-medium text-gray-800">{rest.place}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Online_restaurants;
