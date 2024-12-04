import React from "react";
import styled from "styled-components";
import OvalButton from "../../atoms/OvalButton/OvalButton";

const OvalButtons = ({ selected, onButtonClick }) => {
  const ButtonsContainer = styled.div`
    display: flex;
    column-gap: 21px;
  `;

  return (
    <ButtonsContainer>
      {[1, 2, 3, 4, 5].map((num, index) => (
        <OvalButton
          key={index}
          text={num}
          isSelected={selected === index}
          onClick={() => onButtonClick(index)}
        />
      ))}
    </ButtonsContainer>
  );
};

export default OvalButtons;
