//rfce
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Restaurant() {
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

  const [slide, setslide] = useState(0);

  const nextSlide = () => {
    if (slide === Math.floor(restaurants.length / 3)) return;
    setslide(slide + 3);
  };

  const prevSlide = () => {
    if (slide === 0) return;
    setslide(slide - 3);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold ml-10">Restaurants Near You</div>
        <div className="flex">
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 mr-10"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden h-[250px]">
        {restaurants.map((rest, index) => (
          <div
            style={{
              transform: `translateX(-${slide * 100}%)`,
            }}
            className="w-[150px] shrink-0 mx-2 duration-500 flex flex-col items-start" // Align items to the start (left)
            key={index}
          >
            <div className="relative w-full h-[150px]">
              <img
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
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

export default Restaurant;
