import React, { Suspense } from "react";

import Categories from "./Categories";
import StyledCategoryList from "./styles/StyledCategoryList";

const CategoryList = () => {
  return (
    <>
      <StyledCategoryList>
        <Suspense fallback={<h3>Loading Categories...</h3>}>
          <>
            <Categories></Categories>
          </>
        </Suspense>
      </StyledCategoryList>
    </>
  );
};

export default CategoryList;
