import React from "react";
import star from "../../assets/Star.svg";
import styled from "styled-components";

const StarIcon = () => {
  const StarBackground = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #262e38;
    padding: 16px;
    margin-bottom: 30px;
  `;

  return (
    <StarBackground>
      <img src={star} alt="Star Icon" />
    </StarBackground>
  );
};

export default StarIcon;
