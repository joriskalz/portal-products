import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Suspense } from "react";

import Categories from "./Categories";
import StyledCategoryList from "./styles/StyledCategoryList";

const CategoryList = () => {
  return (
    <>
      <div className="mx-auto mt-6">
        <Suspense fallback={<h3>Loading Categories...</h3>}>
          <div className="">
            <FontAwesomeIcon icon={["far", "circle"]} color="#ddd" />
            <Categories></Categories>
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default CategoryList;
