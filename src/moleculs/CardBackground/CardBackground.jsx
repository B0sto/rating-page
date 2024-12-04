import React, { useState } from "react";
import styled from "styled-components";
import StarIcon from "../../atoms/StarIcon/StarIcon";
import GlobalStyle from "../../atoms/GlobalStyles/GlobalStyles";
import OvalButtons from "../OvalButtons/OvalButtons";


const CardBackground = () => {

  const [selected, setSelected] = useState(null);

  const handleOvalClick = (index) => {
    setSelected(index)
  }

  const handleSubmitButtonClick = () => {
    setSelected(null);
  }


  const Card = styled.div`
    width: 412px;
    padding: 32px 39px 32px 32px;
    border-radius: 30px;
    background: var(
      --black-gradient,
      radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%)
    );
  `;

  const Header = styled.h1`
    color: var(--Pure-White, #fff);
    font-feature-settings: "liga" off, "clig" off;

    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 7px;
  `;

  const RequestText = styled.p`
    color: var(--Light-Grey, #969fad);
    font-feature-settings: "liga" off, "clig" off;

    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 24px;
  `;

  const Button = styled.button`
    width: 341px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 22.5px;
    border: none;
    cursor: pointer;
    background: var(--Orange, #fc7614);
    color: var(--Pure-White, #fff);
    font-feature-settings: "liga" off, "clig" off;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    margin-top: 32px;
    transition: .3s;

    &:hover {
      background-color: white;
      color: #fc7614;

    }
  `;

  return (
    <>
      <GlobalStyle />
      <Card>
        <StarIcon />
        <Header>How did we do?</Header>
        <RequestText>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </RequestText>
        <OvalButtons selected={selected} onButtonClick={handleOvalClick}/>
        <Button onClick={handleSubmitButtonClick}>SUBMIT</Button>
      </Card>
    </>
  );
};

export default CardBackground;
