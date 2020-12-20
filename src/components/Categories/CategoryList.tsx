import React, { Suspense } from "react";

import Categories from "./Categories";
import StyledCategoryList from "./styles/StyledCategoryList";

const CategoryList = () => {
  const imageUrl = "./images/msedge_KsLFWrHMHF.png";
  return (
    <>
      <div className="mx-auto bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 py-10 px-20">
        <Suspense fallback={<h3>Loading Categories...</h3>}>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <Categories></Categories>
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default CategoryList;
