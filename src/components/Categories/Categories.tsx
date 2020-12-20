import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { currentCategoryState } from "../../recoil/atoms";
import { categoryList } from "../../recoil/selectors";

import StyledCategory, { StyledCategoryOverlay } from "./styles/StyledCategory";

import { Category } from "../../common/business-models/Category";

const Categories = (): JSX.Element => {
  const [currentCategory, setCurrentCategory] = useRecoilState(
    currentCategoryState
  );
  const categories = useRecoilValue(categoryList) as Category[];

  const categoriesElements = categories.map((category: Category) => {
    const imageUrl = `./images/${category.imageUrl}`;
    // background-blend-mode: normal|multiply|screen|overlay|darken|lighten|color-dodge|saturation|color|luminosity;

    return (
      <StyledCategory
        // style={{
        //   backgroundImage: `url(${imageUrl})`,
        //   backgroundRepeat: "no",
        //   backgroundSize: "cover",
        // }}
        key={category.id}
        onClick={() => setCurrentCategory(category.id)}
      >
        <StyledCategoryOverlay isSelected={currentCategory === category.id}>
          <h2 className="text-base font-semibold">
            <span>{category.name}</span>
          </h2>
        </StyledCategoryOverlay>
      </StyledCategory>
    );
  });

  return <>{categoriesElements}</>;
};

export default Categories;
