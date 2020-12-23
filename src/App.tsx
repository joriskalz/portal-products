import React, { Suspense, useContext, useState } from "react";
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
  const [isOpenPanel, setOpenPanel] = useState(false);

  const handleClose = (e: any) => {
    setOpenPanel(false);
  };

  return (
    <RecoilRoot>
      <>
        <Sidebar isOpen={isOpenPanel} handleClose={handleClose} />

        <div className="container mx-auto px-6">
          <Header />
          <div className="flex flex-wrap md:mb-0">
            <div className="w-full md:w-4/4 px-4 mb-4 md:mb-0">
              <Suspense
                fallback={
                  <div className="container mx-auto px-6">
                    <h3>Loading Main...</h3>
                  </div>
                }
              >
                <Main handleOpen={() => setOpenPanel(true)} />
              </Suspense>
            </div>
          </div>
          <Footer />
        </div>
      </>
    </RecoilRoot>
  );
}

export default App;
