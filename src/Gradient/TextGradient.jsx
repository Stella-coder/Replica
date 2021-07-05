import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const TextGradient = () => {
  const textColor = useRef();
  const textColor1 = useRef();
  const textColor2 = useRef();

  const myColor = [
    "linear-gradient(90deg, #008BED, #00BAE1)",
    "linear-gradient(black,black)",
    "linear-gradient(black,black)",
  ];
  const myColor1 = [
    "linear-gradient(black,black)",
    "linear-gradient(90deg,#EB068C,#8A23C0)",
    "linear-gradient(black,black)",
  ];
  //FAB42F#
  const myColor2 = [
    "linear-gradient(black,black)",
    "linear-gradient(black,black)",
    "linear-gradient(90deg,#FE5B49,#FAB42F)",
  ];
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    textColor.current.style.backgroundImage = myColor[counter % myColor.length];
    textColor.current.style.transition = "all 750ms";
    textColor1.current.style.backgroundImage =
      myColor1[counter % myColor1.length];
    textColor1.current.style.transition = "all 450ms";
    textColor2.current.style.backgroundImage =
      myColor2[counter % myColor2.length];
    textColor2.current.style.transition = "all 450ms";
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
      <Content>
        Vercel combines the best developer experience with an obsessive focus on
        end-user performance. Our platform enables frontend teams to do their
        best work.
      </Content>
    </Container>
  );
};

export default TextGradient;

const Content = styled.div`
  width: 950px;
  text-align: center;
  font-size: 21px;
  color: gray;
  margin: 60px;
  line-height: 1.5;
`;
const ButtonHolder = styled.div`
  display: flex;
  margin-top: 40px;
`;
const Button = styled.div`
  height: 50px;
  width: 200px;
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
  margin-right: 10px;
  transform: scale(1.01);
  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black;
  }
`;
const Button1 = styled.div`
  height: 50px;
  width: 200px;
  border: 1px solid rgba(200, 200, 200, 0.4);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 350ms;
  box-shadow: rgb(0 0 0/78%), 0 30px 20px -10px;
  margin-left: 10px;

  &:hover {
    border: 1px solid black;
    transform: scale(1.01);
  }
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  line-height: 1;
  text-align: center;
  margin-top: 60px;
`;
const Text = styled.div`
  font-weight: bold;
  font-size: 150px;
  transition: all 350ms;
  transition: background 0.5s linear;
  // color: linear-gradient(90deg, blue, red);
  // background: -webkit-linear-gradient(180deg, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text1 = styled.div`
  font-weight: bold;
  font-size: 150px;
  transition: all 350ms;
  transition: background 0.5s linear;

  // background: -webkit-linear-gradient(180deg, blue, green, purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Text2 = styled.div`
  font-weight: bold;
  font-size: 150px;
  transition: all 350ms;
  transition: background 0.5s linear;

  // background: -webkit-linear-gradient(180deg, #1f82e8, green);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
