import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";

import { currentCategoryState } from "../../recoil/atoms";
import { productList } from "../../recoil/selectors";
import { Product } from "../../common/business-models/Product";
import StyledProducts from "./styles/StyledProducts";

interface Props {}

const Products = (props: Props) => {
  const [currentCategory] = useRecoilState(currentCategoryState);
  const products = useRecoilValue(productList) as Product[];

  let index = 0;
  const productsElements = products.map((product: Product) => {
    const imageUrl = `./images/${product.webfile_name}`;

    //const randomImage = `https://picsum.photos/id/${index}/400/700`;
    const randomImage = `https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80`;

    index++;

    return (
      <StyledProducts>
        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
          <div
            className="flex items-end justify-end h-56 w-full bg-cover"
            style={{
              backgroundImage: `url(${randomImage})`,
              backgroundRepeat: "no",
              backgroundSize: "cover",
            }}
          >
            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </button>
          </div>
          <div className="px-5 py-3">
            <h3 className="text-gray-700 uppercase">{product.name}</h3>
            <span className="text-gray-500 mt-2">{product.amount}</span>
          </div>
        </div>
      </StyledProducts>
    );
  });

  return <>{productsElements}</>;
};

export default Products;
