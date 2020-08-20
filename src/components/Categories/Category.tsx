import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { currentCategoryState } from "../../recoil/atoms";
import { categoryList } from "../../recoil/selectors";

import StyledCategory from "./styles/StyledCategory";
import tw from "twin.macro";

const Categories = () => {
  const [currentCategory, setCurrentCategory] = useRecoilState(
    currentCategoryState
  );
  const categories = useRecoilValue(categoryList);

  return categories.map((category: any) => {
    const imageUrl = `./images/${category.imageUrl}`;
    // background-blend-mode: normal|multiply|screen|overlay|darken|lighten|color-dodge|saturation|color|luminosity;

    return (
      <StyledCategory
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no",
          backgroundSize: "cover",
          backgroundBlendMode: "lighten",
        }}
        isSelected={currentCategory === category.id}
        key={category.id}
        onClick={() => setCurrentCategory(category.id)}
      >
        {category.name}
      </StyledCategory>
    );
  });
};

export default Categories;
