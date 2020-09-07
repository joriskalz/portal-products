import { selector, RecoilValueReadOnly } from "recoil";
import { currentCategoryState } from "./atoms";
import { getCategories, getDetails, getProducts } from "../data";
import { Category } from "../common/business-models/Category";
import { Product } from "../common/business-models/Product";

export const categoryList: RecoilValueReadOnly<Category[]> = selector({
  key: "categoryList",
  get: async () => {
    const response = await getCategories();
    return response;
  },
});

export const currentContactDetails: RecoilValueReadOnly<Category> = selector({
  key: "currentContactDetails",
  get: async ({ get }) => {
    const response = await getDetails(get(currentCategoryState));
    return response;
  },
});

export const productList: RecoilValueReadOnly<Product[]> = selector({
  key: "productList",
  get: async () => {
    const response = await getProducts();
    return response;
  },
});
