import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from "styled-components";

const Router = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state) => state.todos.todos);

  console.log(id);
  console.log(todos);
  const name = [...todos].filter((todo) => todo.id === parseInt(id));
  console.log(name);

  return (
    <StDiv>
        <div>
        <p>id : {id}</p>
        <p>제목 :{name[0].title}</p>
        <p>내용 :{name[0].content}</p>
        <button
            onClick={() => {
            navigate('/');
            }}
        >
            이전으로
        </button>
        </div>
    </StDiv>
  );
};

const StDiv = styled.div`
    width: 100%;
    height: 100vh !important;
    text-align: center;
    background-color: skyblue;
    display: flex;
    justify-content : center;  /* 좌우정렬 */
    align-items : center;  /* 상하정렬 */
    flex-direction : column; /* 세로정렬 */
    flex-wrap : wrap;


`;

export default Router;
