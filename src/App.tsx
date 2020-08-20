import React, { Suspense } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import Sidebar from "./components/Categories/CategoryList";

import StyledForm from "./styles";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <RecoilRoot>
      <Sidebar />
      <Suspense fallback={<h3>Loading Main...</h3>}>
        <Main />
      </Suspense>
      <StyledForm>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </StyledForm>
    </RecoilRoot>
  );
}

export default App;
