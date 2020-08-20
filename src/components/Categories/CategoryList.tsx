import React, { Suspense } from "react";

import ContactsList from "./Category";
import StyledCategoryList from "./styles/StyledCategoryList";

const CategoryList = () => {
  return (
    <>
      <StyledCategoryList>
        <Suspense fallback={<h3>Loading Categories...</h3>}>
          <ContactsList />
        </Suspense>
      </StyledCategoryList>
    </>
  );
};

export default CategoryList;
