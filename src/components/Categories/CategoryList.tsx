import React, { Suspense } from "react";

import Categories from "./Categories";
import StyledCategoryList from "./styles/StyledCategoryList";

const CategoryList = () => {
  const imageUrl = "./images/msedge_KsLFWrHMHF.png";
  return (
    <>
      <div className="mx-auto mt-6">
        <Suspense fallback={<h3>Loading Categories...</h3>}>
          <div className="">
            <Categories></Categories>
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default CategoryList;
