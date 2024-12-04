import React from "react";
import styled from "styled-components";

const OvalButton = ({ text, isSelected, onClick }) => {
  const Oval = styled.div`
    width: 51px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${isSelected ? "#FC7614" : "#262E38"};
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: ${isSelected ? "#FC7614" : "#7c8798"};
    }
  `;

  const Text = styled.p`
    color: ${isSelected ? "white" : "#7c8798"};
    font-size: 16px;
    font-weight: 700;
    transition: 0.3s;
  `;

  return (
    <Oval onClick={onClick}>
      <Text>{text}</Text>
    </Oval>
  );
};

export default OvalButton;
