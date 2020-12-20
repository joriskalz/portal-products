// Credits: https://www.freecodecamp.org/news/how-to-style-your-react-apps-with-less-code-using-tailwind-css-and-styled-components/
import styled from "styled-components";
import tw from "twin.macro";

const StyledCategory = styled.div(() => [
  tw`cursor-pointer shadow-md text-gray-600 m-2 rounded overflow-hidden mx-auto w-64`,
]);

export const StyledCategoryOverlay = styled.div(({ isSelected }) => [
  tw`transition duration-200 bg-gray-100 hover:bg-white hover:shadow-xl p-2 w-full text-center opacity-90 hover:bg-gray-300`,
  isSelected
    ? tw`transition duration-200 ease-in-out bg-white text-gray-900`
    : tw``,
]);

export default StyledCategory;
