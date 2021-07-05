import React from "react";
import styled from "styled-components";
import HeroFile from "../Hero/HeroFile";
import Footer from "./Footer";
import Hero from "./Hero";

const Body = () => {
  return (
    <Container>
      <Explore>Explore the vercel way</Explore>
      <Line></Line>
      <Circle>1</Circle>
      <Develop>Develop</Develop>
      <Bold>Start with the developer</Bold>
      <MainText>
        <Text>
          Developers love <a>Next.js</a>, the open source React framework Vercel
          built together with Google and Facebook. Next.js powers the biggest
          websites like <a>Twilio</a>, for use cases in <a>e-commerce</a>,
          <a>travel</a>, <a>news</a>, and <a>marketing</a>.
        </Text>
        <Text2>
          Vercel is the best place to deploy any frontend app. Start by
          deploying with zero configuration to our <a>global edge network</a>.
          <a> Scale dynamically</a> to millions of pages without breaking a
          sweat.
        </Text2>
      </MainText>
      <ImageText>
        <Image src="images/img.png" />
        <TextHolder>
          <b>Fast Refresh</b>
          <span>Reliable live-editing experience for your UI components.</span>
          <b>Flexible Data Fetching</b>
          <span>
            Connect your pages to any data source, headless CMS, or API and make
            it work in everyone’s dev environment
          </span>
          <b>Edge On Localhost</b>
          <span>
            From caching to Serverless Functions, all our cloud primitives work
            perfectly on localhost.
          </span>
        </TextHolder>
      </ImageText>
      <Work>Work with 30+ jambstack frameworks</Work>
      <Img src="images/img2.png" />

      <Line2></Line2>
      <Circle2>2</Circle2>
      <Develop2>Preview</Develop2>
      <Bold>Accelerate with your team</Bold>
      <MainText2>
        Frontend development is not meant to be a solo activity. The Vercel
        platform makes it a collaborative experience with deploy previews for
        every code change, by seamlessly integrating with <a>GitHub</a>,{" "}
        <a>GitLab</a>, and
        <a> Bitbucket</a>.
      </MainText2>

      <Wrapper>
        <Image1>
          <img src="images/img3.png" />
          <a>
            {" "}
            <img src="images/img4.png" />
          </a>
        </Image1>
        <Lines>
          <L1></L1>
          <C></C>
          <L2></L2>
          <C></C>
          <L2></L2>
          <C></C>
          <L3></L3>
          <C2>3</C2>
          <Ship>Ship</Ship>
        </Lines>
        <TextHolder1>
          <b>Push to Deploy</b>
          <span>
            <a>Import your repo</a> with one click, then push. Our built-in
            CI/CD system triggers for every code change.
          </span>

          <b>Get your preview URl</b>
          <span>
            Every Git branch and PR receives a live, production-like URL that
            everyone on your team can visit.
          </span>

          <b>Share and Collaborate</b>
          <span>
            Avoid surprises by iterating with your entire team. Test from the
            perspective of your users, on every platform.
          </span>
        </TextHolder1>
      </Wrapper>
      <Bold>Delight Every Visitor</Bold>
      <MainText clr>
        <Text>
          Merged changes instantly go live on our <a>global edge network</a>,
          putting your content as close as possible to your customers.
          Everything is taken care of for you, from <a>SSL encryption</a> to{" "}
          <a>asset compression</a> and cache invalidation.
        </Text>
        <Text2>
          Speed is critical to customers - and for SEO. Vercel goes beyond just
          caching static content, scaling to <a>millions of pages</a> through{" "}
          <a>dynamic code execution</a>.
        </Text2>
      </MainText>
      <Hero />
      <Explore>BEGIN YOUR VERCEL JOURNEY</Explore>
      <Img1>
        <img src="images/img5.png" />
      </Img1>
      <Explore>TRUSTED BY THE BEST FRONTEND TEAMS</Explore>
      <Img2>
        {" "}
        <img src="images/img6.png" />
      </Img2>
      <Footer />
    </Container>
  );
};

export default Body;

const Img1 = styled.div`
  margin: 50px 0px 90px 0;
`;
const Img2 = styled.div`
  margin: 30px 0px 80px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-right: 100px;
`;
const Image1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  a {
    margin-top: 250px;
  }
`;
const Lines = styled.div`
  display: flex;
  width: 50px;
  align-items: center;
  flex-direction: column;
`;
const L1 = styled.div`
  height: 100px;
  width: 1px;
  background-image: linear-gradient(180deg, transparent, gray);
`;
const C = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 7px;
  border: 2px solid gray;
`;
const L2 = styled.div`
  height: 400px;
  width: 1px;
  border-left: 1px dashed gray;
`;
const L3 = styled.div`
  height: 300px;
  width: 1px;
  background-image: linear-gradient(180deg, gray, orange);
`;
const C2 = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-image: linear-gradient(90deg, #fe6147, #faad31);
  color: white;
`;
const TextHolder1 = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 100px 0px 0px 50px;

  b {
    font-size: 22px;
  }
  span {
    color: gray;
    font-size: 17px;
    margin: 20px 0px 300px 0px;
    a {
      color: #e8078d;
      &:hover {
        color: gray;
      }
    }
  }
`;
const Ship = styled.div`
  background: -webkit-linear-gradient(90deg, #fe6147, #faad31);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-top: 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  flex-direction: column;
`;
const Bold = styled.div`
  font-size: 55px;
  font-weight: bold;
`;
const Explore = styled.div`
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;
`;
const MainText2 = styled.div`
  width: 780px;
  color: gray;
  text-align: center;
  font-size: 16px;
  a {
    color: #e8078d;
    &:hover {
      color: black;
      cursor: pointer;
    }
  }
`;

const MainText = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: gray;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 20px;
  a {
    cursor: pointer;
    color: ${({ clr }) => (clr ? "#fe6147" : "blue")};
    &:hover {
      color: gray;
    }
  }
`;
const ImageText = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  margin-top: 50px;
`;
const Image = styled.img`
  margin-right: 50px;
`;
const TextHolder = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  b {
    font-size: 22px;
  }
  span {
    color: gray;
    font-size: 16px;
    margin: 20px 0px 50px 0px;
  }
`;
const Work = styled.div`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 13px;
  margin: 50px 0 20px 0px;
`;
const Img = styled.img``;
const Text = styled.div`
  width: 530px;
  margin: 20px;
`;
const Text2 = styled.div`
  width: 530px;
  margin: 20px;
`;
const Develop = styled.div`
  background: -webkit-linear-gradient(180deg, #00c8de, #0192eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;
const Develop2 = styled.div`
  background: -webkit-linear-gradient(180deg, #e4088f, #8424c3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;
const Line = styled.div`
  height: 100px;
  width: 1.2px;
  //border: 1px solid rgb(36, 168, 236, 0.3);
  display: flex;
  margin-top: 50px;
  background-image: linear-gradient(180deg, transparent, #00c8de);
`;
const Line2 = styled.div`
  height: 100px;
  width: 1.2px;
  display: flex;
  margin-top: 50px;
  background-image: linear-gradient(180deg, transparent, #dc0a93);
`;
const Circle2 = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: linear-gradient(90deg, #8424c3, #e4088f);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: white;
`;
const Circle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: linear-gradient(90deg, #0096ea, #00cfdc);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: white;
`;
