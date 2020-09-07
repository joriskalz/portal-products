// Credits: https://www.freecodecamp.org/news/how-to-style-your-react-apps-with-less-code-using-tailwind-css-and-styled-components/
import styled from "styled-components";
import tw from "twin.macro";

const StyledProductList = styled.div.attrs({
  className:
    "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6",
})`
  & {
  }
`;

export default StyledProductList;
