import React, { Suspense } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Header from "./components//Header/Header.Component";
import Sidebar from "./components/Categories/CategoryList";
import Footer from "./components/Footer/Footer.Component";

import { Main } from "./components/Main/Main";

function App() {
  return (
    <RecoilRoot>
      <>
        <Header />

        <div className="flex flex-wrap md:mb-0">
          <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
            <Sidebar />
          </div>
          <div className="w-full md:w-3/4 px-4 mb-4 md:mb-0">
            <Suspense
              fallback={
                <div className="container mx-auto px-6">
                  <h3>Loading Main...</h3>
                </div>
              }
            >
              <Main />
            </Suspense>
          </div>
        </div>
        <Footer />
      </>

      {/* <StyledForm>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </StyledForm> */}
    </RecoilRoot>
  );
}

export default App;
