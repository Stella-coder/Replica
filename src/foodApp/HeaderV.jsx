import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderV = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <span>Home</span>
        </Link>

        <Link to="/input">
          <span>Add</span>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default HeaderV;

const Container = styled.div`
  height: 70px;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  span {
    margin-left: 10px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: all 350ms;
    font-weight: bold;
    :hover {
      color: rgba(255, 255, 255, 1);
      transform: scale(1.05);
    }
  }
`;
