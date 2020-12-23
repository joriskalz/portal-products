import React, { useContext, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";

import { currentCategoryState } from "../../recoil/atoms";
import { Button } from "@windmill/react-ui";
import { MdFilterList } from "react-icons/md";
import ProductList from "../Product/ProductList";
import Footer from "../Footer/Footer.Component";
//import { contactsList } from "../../recoil/selectors";

interface Props {
  handleOpen: any;
}

export const Main = (props: Props) => {
  const [currentCategory] = useRecoilState(currentCategoryState);

  //const contacts = useRecoilValue(contactsList);

  return (
    <>
      <div className="flex justify-end mx-auto">
        <div>
          <Button
            onClick={props.handleOpen}
            size="small"
            iconLeft={MdFilterList}
          >
            Filter Products
          </Button>
        </div>
      </div>

      <ProductList />
    </>
  );
};
