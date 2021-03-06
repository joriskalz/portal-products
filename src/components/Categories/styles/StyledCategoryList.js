// Credits: https://www.freecodecamp.org/news/how-to-style-your-react-apps-with-less-code-using-tailwind-css-and-styled-components/
import styled from "styled-components";
import tw from "twin.macro";

const StyledCategoryList = styled.div.attrs({
  className:
    "mx-auto bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 py-20",
})`
  & {
    div {
      ${tw`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-3/4 mx-auto bg-gray-600`}
    }

    /* 
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    } */
  }
`;

export default StyledCategoryList;
