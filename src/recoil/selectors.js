import { selector } from "recoil";
import { currentCategoryState } from "./atoms";
import { getCategories, getDetails } from "../data";

export const categoryList = selector({
  key: "categoryList",
  get: async () => {
    const response = await getCategories();
    return response;
  },
});

export const currentContactDetails = selector({
  key: "currentContactDetails",
  get: async ({ get }) => {
    const response = await getDetails(get(currentCategoryState));
    return response;
  },
});
