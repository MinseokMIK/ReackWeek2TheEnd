import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";


const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("")
  useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    const RandomNum = Math.floor(Math.random() * 100);

    dispatch(
      addTodo({
        id: RandomNum,
        title,
        content,
        isDone: true,
      })
    );
      setTitle("");
      setContent("");
  };

  return (
    <StFormContainer>
      <form>
        <label>제목</label>
 
        <StInput
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value); 
          }}

        />

        <label>내용</label>
        <StInputTitle
          type="text"
          value={content}
          onChange={(e)=> {
            setContent(e.target.value)
          }}
        >
        </StInputTitle>

        <StButton onClick={addTodoHandler}>추가하기</StButton>
      </form>
    </StFormContainer>
  );
};

export default AddForm;

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 100px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

const StInputTitle = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;