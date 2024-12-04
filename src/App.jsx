import React from "react";
import styled from "styled-components";
import FullCard from "./organisms/FullCard/FullCard";
import GlobalStyles from "./atoms/GlobalStyles/GlobalStyles";

const App = () => {
  const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--Very-Dark-Blue, #131518);
    height: 100vh;
  `;

  return (
    <>
      <GlobalStyles />
      <Background>
        <FullCard/>
      </Background>
    </>
  );
};

export default App;
