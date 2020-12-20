import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { currentCategoryState } from "../../recoil/atoms";

import ProductList from "../Product/ProductList";
//import { contactsList } from "../../recoil/selectors";

interface Props {}

export const Main = (props: Props) => {
  const [currentCategory] = useRecoilState(currentCategoryState);
  //const contacts = useRecoilValue(contactsList);

  return (
    <>
      <div className="container mx-auto px-6">
        <ProductList />
      </div>
    </>
  );
};
