// Credits: https://www.freecodecamp.org/news/how-to-style-your-react-apps-with-less-code-using-tailwind-css-and-styled-components/
import styled from "styled-components";
import tw from "twin.macro";

const StyledCategory = styled.div(() => [
  tw`cursor-pointer shadow-md text-gray-100 m-4 rounded overflow-hidden mx-auto w-32`,
]);

export const StyledCategoryOverlay = styled.div(({ isSelected }) => [
  tw`transition duration-200 bg-blue-500 hover:bg-white hover:shadow-xl p-2 w-full text-center opacity-90 hover:bg-blue-700`,
  isSelected
    ? tw`transition duration-200 ease-in-out bg-gray-600 text-gray-100`
    : tw``,
]);

export default StyledCategory;
