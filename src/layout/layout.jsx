import React from "react";
import TodoListContainer from "../components/TodoListContainer";
import AddForm from "../components/AddForm";

const Layout = () => {
  return (
    <div>
    <AddForm />
    <TodoListContainer />
    </div>
  );
};

export default Layout;

