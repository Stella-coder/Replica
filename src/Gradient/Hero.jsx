import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <HeroN
        src="Videos/globe2.mp4"
        type="video/mp4"
        autoPlay={true}
        loop={true}
        playsInline={true}
        muted
      />

      <Wrapper>
        <NumbText>
          <Numb>70</Numb>
          <Text>cities</Text>
        </NumbText>
        <Line></Line>

        <NumbText1>
          <Numb>12B+</Numb>
          <Text>REQUESTS PER WEEK</Text>
        </NumbText1>
        <Line></Line>

        <NumbText2>
          <Numb>9BP</Numb>
          <Text>DATA SERVED</Text>
        </NumbText2>
        <Line></Line>

        <NumbText3>
          <Numb>99.99%</Numb>
          <Text>GUARANTEED UPTIME</Text>
        </NumbText3>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const NumbText = styled.div`
  text-align: right;
  width: 30vw;
  margin-right: 30px;
`;
const Numb = styled.div`
  font-size: 50px;
  font-weight: bold;
`;
const Text = styled.div``;
const NumbText1 = styled.div`
  width: 20vw;
  text-align: center;
`;

const NumbText2 = styled.div`
  width: 20vw;
  text-align: center;
`;
const NumbText3 = styled.div`
  width: 30vw;
  margin-left: 30px;
  text-align: left;
`;

const Container = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;
const HeroN = styled.video`
  width: 100%;
  height: 65vh;
  object-fit: cover;
  z-index: -1;
`;
const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100vw;
  height: 20vh;
  display: flex;

  align-items: center;
`;

const Line = styled.div`
  height: 50px;
  width: 2px;
  background-color: gray;
  opacity: 0.2;
`;
