import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const TextGradient = () => {
  const textColor = useRef();
  const textColor1 = useRef();
  const textColor2 = useRef();

  const myColor = ["purple", "black", "black"];
  const myColor1 = ["black", "blue", "black"];
  const myColor2 = ["black", "black", "yellow"];
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    textColor.current.style.color = myColor[counter % myColor.length];
    textColor.current.style.transition = "all 350ms";
    textColor1.current.style.color = myColor1[counter % myColor1.length];
    textColor1.current.style.transition = "all 350ms";
    textColor2.current.style.color = myColor2[counter % myColor2.length];
    textColor2.current.style.transition = "all 350ms";
  }, [counter]);
  useEffect(() => {
    setInterval(() => {
      setCounter((e) => e + 1);
    }, 3000);
  }, []);
  //#1f82e8, #935b60, #ae3952
  return (
    <Container>
      <Wrapper>
        <Text ref={textColor}>Develop.</Text>
        <Text1 ref={textColor1}>Preview.</Text1>
        <Text2 ref={textColor2}>Ship.</Text2>
      </Wrapper>
      <ButtonHolder>
        <Button>Start Deploying</Button>
        <Button1>Get a Demo</Button1>
      </ButtonHolder>
    </Container>
  );
};

export default TextGradient;

const ButtonHolder = styled.div`
  display: flex;
  margin-top: 40px;
  width: 600px;
  justify-content: space-around;
`;
const Button = styled.div`
  height: 50px;
  width: 180px;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background-color: black;
  transition: all 350ms;
  &:hover {
    background-color: transparent;
    color: black;
  }
`;
const Button1 = styled.div`
  height: 50px;
  width: 180px;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 350ms;
  box-shadow: rgb(0 0 0/78%), 0 30px 20px -10px;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lavender;
  flex-direction: column;
`;
const Wrapper = styled.div`
  line-height: 1;
  text-align: center;
`;
const Text = styled.div`
  font-weight: bold;
  font-size: 120px;
  font-family: poppin;
  // color: linear-gradient(90deg, blue, red);
  // background: -webkit-linear-gradient(180deg, red, blue);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
`;

const Text1 = styled.div`
  font-weight: bold;
  font-size: 120px;
  font-family: poppins;
  // background: -webkit-linear-gradient(180deg, blue, green, purple);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
`;
const Text2 = styled.div`
  font-weight: bold;
  font-size: 120px;
  font-family: poppins;
  // background: -webkit-linear-gradient(180deg, #1f82e8, green);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
`;
