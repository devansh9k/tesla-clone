import React from "react";
import styled from "styled-components";

function Section({ title, subtitle, leftBtn, rightBtn, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </ItemText>
      <div>
        <ButtonGrp>
          <LeftButton>{leftBtn}</LeftButton>
          <RightButton>{rightBtn}</RightButton>
        </ButtonGrp>
        <DownArrow
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </DownArrow>
      </div>
    </Wrap>
  );
}

// const Wrapdec = ({ children }) => <div>{children}</div>;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url(${props.bgImage})`};
`;

const ItemText = styled.div`
  padding: 15vh;
  text-align: center;
`;

const ButtonGrp = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const LeftButton = styled.button`
  background-color: rgba(23, 26, 28, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 20px;
  margin-top: 5px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.svg`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

export default Section;
