import React from "react";
import styled from "styled-components";

const HeroFile = () => {
  return (
    <Container>
      <Hero
        src="Videos/hero.mp4"
        type="video/mp4"
        autoPlay={true}
        loop={true}
        playsInline={true}
        muted
      />

      <Wrapper>
        <Info>Know us better.</Info>
        <Info1>The loop attribute is a boolean attribute.</Info1>
        <ButtonContainer>
          <Button>Sign up</Button>
          <Button1>Know more</Button1>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default HeroFile;

const Container = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Hero = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  position: relative;
`;
const Wrapper = styled.div`
  position: absolute;
  color: white;
`;
const Info = styled.div`
  font-weight: bold;
  font-size: 50px;
`;
const Info1 = styled.div`
  font-size: 20px;
  padding-bottom: 5px;
  margin-bottom: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.div`
  width: 150px;
  height: 40px;
  background-color: #040714;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #f69928;
    cursor: pointer;
  }
`;
const Button1 = styled.div`
  width: 150px;
  height: 40px;
  background-color: #f69928;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #040714;
    cursor: pointer;
  }
`;
