import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Input = () => {
  const [myImage, setmyImage] = useState("");
  const [meal, setMeal] = useState("");
  const [price, setPrice] = useState("");

  const handle = (e) => {
    const file = e.target.files[0];
    setmyImage(file);
    console.log("This is", myImage);
  };

  const postData = async () => {
    const formData = new FormData();
    formData.append("image", myImage);
    formData.append("meal", meal);
    formData.append("price", price);
    await axios.post("http://localhost:4009/api", formData);
    setmyImage("");
    setMeal("");
    setPrice("");
  };
  return (
    <Container>
      <Wrapper>
        <File>
          Choose your Image
          <input type="file" onChange={handle} />
        </File>
        <input
          placeholder="Enter Meal"
          value={meal}
          onChange={(e) => {
            setMeal(e.target.value);
          }}
        />
        <input
          placeholder="Enter price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            postData();
            console.log("hyu");
          }}
        >
          Submit
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: lavender;
`;
const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 280px;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 10px;
  }
`;
const File = styled.div`
  height: 60px;
  width: 280px;
  background-color: white;
  color: gray;
  padding-left: 5px;
  font-size: 15px;
  input {
    width: 280px;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 10px;
  }
`;

const Button = styled.div`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  background-color: aliceblue;
  transition: all 350ms;
  :hover {
    background-color: #cbe0f3;
    transform: scale(1.03);
  }
`;
