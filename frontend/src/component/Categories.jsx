import React from "react";
import { assets, categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const { navigate } = useAppContext();
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Categories</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 mt-6">
        {categories.map((category, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center group justify-center cursor-pointer rounded-lg py-5 px-3 hover:scale-105 transition-transform duration-200 ease-in-out"
              style={{ backgroundColor: category.bgColor }}
              onClick={() => {
                navigate(`/all-product/${category.path.toLocaleLowerCase()}`);
              scrollTo(0, 0);
              }}
            >
              <img
                src={category.image}
                alt={category.text}
                className="group-hover:scale-108 transition max-w-28"
              />
              <p className="text-sm font-medium">{category.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
