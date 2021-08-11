import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import app from "../App";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";

const Display = () => {
  const { id } = useParams;
  const [fetchData, setFetchData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:4009/api");
    setFetchData(res.data);
    console.log(fetchData);
  };
  useEffect(() => {
    getData();
  }, []);

  const updateData = async (id) => {
    await axios.put(`http://localhost:4009/api${id}`, { order: true });
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:4009/api${id}`);
  };

  return (
    <Container>
      {fetchData?.map(({ _id, image, meal, price }) => (
        <Wrapper key={_id}>
          <Image src={image} />
          <Meal>{meal}</Meal>
          <Price>{price}</Price>
          <Icons>
            <Icon>
              <AiFillDelete
                onClick={() => {
                  deleteData(_id);
                }}
              />
            </Icon>
            <Icon2>
              <AiFillEdit
                onClick={() => {
                  updateData(_id);
                  console.log(_id);
                }}
              />
            </Icon2>
          </Icons>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Display;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  background-color: lavender;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: rgb(0 0 0 /69%) 5px 20px 20px -10px;
  color: brown;
  margin: 20px;

  transition: all 350ms;
  /* :hover{
    transform: scale(1.05);
  } */
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 60%;
  border-radius: 10px 10px 0px 0px;
`;
const Meal = styled.div``;
const Price = styled.div``;
const Icons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: white;
`;
const Icon = styled.div`
  height: 30px;
  width: 40px;
  background-color: red;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Icon2 = styled.div`
  cursor: pointer;
  height: 30px;
  width: 40px;
  background-color: red;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
