// Credits: https://www.freecodecamp.org/news/how-to-style-your-react-apps-with-less-code-using-tailwind-css-and-styled-components/
import styled from "styled-components";
import tw from "twin.macro";

const StyledCategory = styled.div(() => [
  tw`flex content-end flex-wrap shadow-md text-white m-4 rounded overflow-hidden w-1/6 h-40`,
]);

export const StyledCategoryOverlay = styled.div(({ isSelected }) => [
  tw`bg-gray-700 hover:bg-gray-600 p-2 w-full text-center opacity-90`,
  isSelected ? tw`bg-gray-500` : tw``,
]);

export default StyledCategory;
