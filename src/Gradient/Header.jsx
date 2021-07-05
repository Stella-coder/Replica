import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Logo src="images/vercel.png" />
      <Text>
        <span>Templates</span>
        <span>Analytics</span>
        <span>Customer</span>
        <span>Pricing</span>
      </Text>
      <TextL>
        <span>Contact</span>
        <span>Login</span>
        <Button>Sign Up</Button>
      </TextL>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
`;

const Logo = styled.img`
  display: flex;
`;
const Text = styled.div`
  display: flex;
  color: gray;
  span {
    margin-left: 10px;
  }
`;
const TextL = styled.div`
  display: flex;
  heigth: 70px;
  align-items: center;
  span {
    margin-left: 10px;
    color: gray;
  }
`;
const Button = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 30px;
  width: 80px;
  background-color: black;
  color: white;
  border-radius: 5px;
  &:hover {
    background-color: transparent;
    border: 1px solid black;
    color: black;
  }
`;
