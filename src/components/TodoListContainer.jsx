import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {clearTodo} from "../redux/modules/todos";
import { deleteTodo } from "../redux/modules/todos";
import { cencelTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";


const TodoListContainer = () => {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
    

return (
    
    <>
      <p>Working.. 🔥</p>
        <StTodos>
        <br/>{todos.map((todo) => (
          todo.isDone === true ? <StTodo key={todo.id}>{todo.title}<br></br>{todo.content} <br/> <button onClick={()=>{dispatch(clearTodo(todo.id));}}>완료</button> <button onClick={()=>{dispatch(deleteTodo(todo.id));}}>삭제</button> <br></br><p onClick = {()=>{navigate(`/Router/${todo.id}`);}} >상세보기</p></StTodo> : null
            // 완료 누르면 isDone이 true에서 false로 바뀐다
          ))}
        </StTodos>
      <p>Done..! 🎉</p>
        <StTodos>
        <br/>{todos.map((todo) => (
          todo.isDone === false ? <StTodo key={todo.id}>{todo.title}<br></br>{todo.content} <br/> <button  onClick={()=>{dispatch(cencelTodo(todo.id));}}>취소</button> <button onClick={()=>{dispatch(deleteTodo(todo.id));}}>삭제</button> <br></br><p onClick = {()=>{navigate(`/Router/${todo.id}`);}} >상세보기</p></StTodo> : null
            // 완료 누르면 isDone이 true에서 false로 바뀐다
          ))}
        </StTodos>
    </>
    
  );
};

export default TodoListContainer;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 20%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
`;
