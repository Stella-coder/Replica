import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaYoutube, FaInstagramSquare } from "react-icons/fa";
let date = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <span>About Us</span>
          <Text1>How it works</Text1>
          <Text2>Testimonial</Text2>
          <Text3>Service</Text3>
          <Text4>Investor</Text4>
          <Text5>Terms of services</Text5>
        </Wrapper>
        <Wrapper>
          <span>Contact Us</span>
          <Text1>How it works</Text1>
          <Text2>Testimonial</Text2>
          <Text3>Service</Text3>
          <Text4>Investor</Text4>
          <Text5>Terms of services</Text5>
        </Wrapper>
        <Wrapper>
          <span>Videos</span>
          <Text1>How it works</Text1>
          <Text2>Testimonial</Text2>
          <Text3>Service</Text3>
          <Text4>Investor</Text4>
          <Text5>Terms of services</Text5>
        </Wrapper>
        <Wrapper>
          <span>Social media</span>
          <Text1>How it works</Text1>
          <Text2>Testimonial</Text2>
          <Text3>Service</Text3>
          <Text4>Investor</Text4>
          <Text5>Terms of services</Text5>
        </Wrapper>
      </Container>
      <Bottom>
        <Logo src="images/logo.png" />
        <Content>
          <span>Developed ny Codelab 🚀|©️{date} all right reserved</span>
        </Content>
        <Social>
          <a
            href="https://www.facebook.com/groups/brighterdayscodelab/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www,instragram.com/sophie_stella/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.facebook,com/groups/brighterdayscodelab/"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
        </Social>
      </Bottom>
    </>
  );
};

export default Footer;

const Logo = styled.img`
  width: 80px;
  object-fit: contain;
  margin-right: 20px;
`;
const Content = styled.div``;
const Social = styled.div`
  margin-left: 20px;
  width: 200px;

  a {
    font-size: 35px;
    margin-left: 5px;
  }
`;

const Bottom = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #040714;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background-color: darkblue;
  display: flex;
  justify-content: space-around;
`;
const Wrapper = styled.div`
  color: white;
  font-weight: none;
  span {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
const Text1 = styled.div`
  text-align: left;
  margin-top: 20px;
`;
const Text2 = styled.div`
  text-align: left;
  margin-top: 10px;
`;
const Text3 = styled.div`
  text-align: left;
  margin-top: 10px;
`;
const Text4 = styled.div`
  text-align: left;
  margin-top: 10px;
`;
const Text5 = styled.div`
  text-align: left;
  margin-top: 10px;
`;
