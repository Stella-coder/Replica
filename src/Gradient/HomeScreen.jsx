import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import TextGradient from "./TextGradient";

const HomeScreen = () => {
  const [change, setChange] = useState(false);
  console.log(window.scrollY);
  const move = () => {
    if (window.scrollY > 70) {
      setChange(true);
    }
    setChange(false);
  };

  return (
    <Container>
      <Header />

      <TextGradient />

      <Body />
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div``;
