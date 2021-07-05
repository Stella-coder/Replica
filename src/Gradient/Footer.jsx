import React from "react";
import styled from "styled-components";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
let date = new Date().getFullYear();

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          <Frame>Framework</Frame>
          <span>Next.js</span>
          <span>Create React app</span>
          <span>Gatsby</span>
          <span>Nuxt.js</span>
          <span>Vue</span>
          <span>Angular</span>
          <span>More Framework</span>
        </Text>
        <Text1>
          <Resources>Resources</Resources>
          <span>Documentation</span>
          <span>Expert</span>
          <span>Customers</span>
          <span>Guides</span>
          <span>Support</span>
          <span>Api reference</span>
          <span>OSS</span>
          <span>Comand-Line</span>
          <span>Integrations</span>
        </Text1>
        <Text2>
          <Company>Company</Company>
          <span>Home</span>
          <span>Blog</span>
          <span>Change-log</span>
          <span>About</span>
          <span>Careers</span>
          <span>Pricing</span>
          <span>Security</span>
          <span>Next.js Conf</span>
          <span>Partners</span>
          <span>Contact Us</span>
        </Text2>
        <Text3>
          <Legal>Legal</Legal>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Trademark Policy</span>
          <span>Inactivity Policy</span>
          <span>DMCA policy</span>
          <span>DPA</span>
          <span>SLA</span>
        </Text3>
      </Wrapper>

      <Wrapper2>
        <Logo src="/images/vercel.png" />
        <Contain>
          <span>Copyright ©️ {date} Vercel Inc. All Right Reserved</span>
          <Icons>
            <a>
              <AiOutlineGithub />
            </a>
            <div></div>
            <a>
              <AiOutlineTwitter />
            </a>
          </Icons>
          <Status>
            Status: 🔵 <a>All Normal System.</a>
          </Status>
          <Light>
            <HiOutlineLightBulb />
            Light
            <a>
              <MdKeyboardArrowUp />
              <MdKeyboardArrowDown />
            </a>
          </Light>
        </Contain>
      </Wrapper2>
    </Container>
  );
};

export default Footer;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90vw;
`;
const Logo = styled.img`
  margin-left: 90px;
  width: 130px;
`;
const Contain = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  margin-top: 30px;
  span {
    color: gray;
    font-size: 15px;
  }
`;

const Light = styled.div`
  height: 35px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: 1px solid rgba(200, 200, 200, 0.4);
  cursor: pointer;
  border-radius: 3px;
  background-color: white;
  margin-right: 30px;
  a {
    display: flex;
    flex-direction: column;
  }
  &:hover {
    border: 1px solid black;
  }
`;
const Status = styled.div`
  height: 35px;
  width: 250px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid rgba(200, 200, 200, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  a {
    color: #0f78f4;
  }
`;
const Icons = styled.div`
  display: flex;
  div {
    width: 2px;
    height: 25px;
    background-color: gray;
    opacity: 0.1;
    margin-left: 10px;
  }
  a {
    font-size: 25px;
    color: gray;
    margin-left: 10px;

    &:hover {
      color: black;
      cursor: pointer;
    }
  }
`;

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  background-color: #fafafa;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  color: gray;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  span {
    margin-bottom: 20px;
    cursor: pointer;
  }
`;
const Frame = styled.div`
  margin: 40px 0px 40px 0px;
  color: black;
`;
const Text1 = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: 20px;
    cursor: pointer;
  }
`;
const Resources = styled.div`
  margin: 40px 0px 40px 0px;
  color: black;
`;
const Text2 = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: 20px;
    cursor: pointer;
  }
`;
const Text3 = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: 20px;
    cursor: pointer;
  }
`;
const Company = styled.div`
  color: gray;
  color: black;
  margin: 40px 0px 40px 0px;
`;
const Legal = styled.div`
  color: gray;
  color: black;
  margin: 40px 0px 40px 0px;
`;
