import React from "react";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [
  "North_Indian_4.jpeg",
  "Pizza.jpeg",
  "Noodles.jpeg",
  "Biryani_2.jpeg",
  "Burger.jpeg",
  "Cakes.jpeg",
  "Chinese.jpeg",
  "Chole_Bature.jpeg",
  "Dosa.jpeg",
  "Gulab_Jamun.jpeg",
  "Idli.jpeg",
  "Khichdi.jpeg",
  "Salad.jpeg",
  "South_Indian_4.jpeg",
];

function Category() {
  const [slide, setslide] = useState(0);
  const nextSlide = () => {
    // console.log(images.length);
    // console.log(slide+3);

    if (slide == 9) return false;
    setslide(slide + 3);
  };
  const prevSlide = () => {
    if (slide == 0) return false;
    setslide(slide - 3);
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Header Section */}
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold ml-10">What's on your mind?</div>
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

      <div className="flex overflow-hidden">
        {images.map((image, index) => {
          return (
            <div
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
              key={index}
              className=" w-[150px] shrink-0 mx-2 duration-500"
            >
              <img src={`/images/Food_items/${image}`} alt="" />
            </div>
          );
        })}
      </div>
      <hr className="my-6 border[1px] " />
    </div>
  );
}

export default Category;
