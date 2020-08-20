import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { currentCategoryState } from "../../recoil/atoms";
//import { contactsList } from "../../recoil/selectors";

interface Props {}

export const Main = (props: Props) => {
  const [currentCategory] = useRecoilState(currentCategoryState);
  //const contacts = useRecoilValue(contactsList);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-20">
      <img
        className="w-full"
        src={require("../../pexels-photo-2303781.jpeg")}
        alt="Display"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-blue-800 text-xl mb-2">
          {currentCategory}
        </div>
        <p className="text-gray-700 text-base">
          Credits:
          https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Software Engineer
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Writter
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2">
          #Public Speaker
        </span>
      </div>
    </div>
  );
};
