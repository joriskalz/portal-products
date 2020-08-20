// Credits: https://www.freecodecamp.org/news/how-to-style-your-react-apps-with-less-code-using-tailwind-css-and-styled-components/
import styled from "styled-components";
import tw from "twin.macro";

const StyledCategory = styled.div(({ isSelected }) => [
  tw`shadow-md text-white text-center bg-gray-700 px-20 py-16 m-4 rounded overflow-hidden text-xl font-bold hover:bg-gray-500`,
  // Ternary
  isSelected ? tw`bg-gray-500 text-gray-600` : tw``,
]);

export default StyledCategory;
