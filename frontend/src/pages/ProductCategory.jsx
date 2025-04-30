import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import ProductCard from "../component/ProductCard";

const ProductCategory = () => {
  const { products } = useAppContext();
  const { category } = useParams();
  const searchCategory = categories.find(
    (item) => item.path.toLocaleLowerCase() === category
  );
  const filteredProducts = products.filter(
    (product) => product.category.toLocaleLowerCase() === category
  );

  return (
    <div className="mt-16">
      {searchCategory && (
        <div className="flex flex-col items-end w-max">
          <p className="text-2xl font-medium uppercase text-gray-800">
            {searchCategory.text.toLowerCase()}
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full mt-0.5"></div>
        </div>
      )}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p className="text-2xl font-medium text-gray-800">
            No Products Found
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full mt-0.5"></div>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
