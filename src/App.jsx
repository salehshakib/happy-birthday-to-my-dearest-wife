/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import BirthdayPage from "./pages/BirthdayPage";

function App() {
  return (
    <ReactFullpage
      licenseKey=""
      scrollingSpeed={1000}
      navigation
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <BirthdayPage />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
