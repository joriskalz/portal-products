// Credits: https://www.freecodecamp.org/news/how-to-style-your-react-apps-with-less-code-using-tailwind-css-and-styled-components/
import styled from "styled-components";
import tw from "twin.macro";

const StyledCategoryList = styled.div.attrs({
  className: "flex flex-row justify-center items-center bg-gray-100 p-10",
})`
  & {
    /* form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    } */
  }
`;
export default StyledCategoryList;
