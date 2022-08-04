import React from "react";
import styled from "styled-components";
import {Routes, Route} from "react-router-dom"
import Cat from "./pages/Cat"
import Home from "./pages/Home"
import Router from "./pages/Router";
import Layout from "./layout/layout";

const App = () => {
  return (
    <StContainer>
      <Layout />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Cat" element={<Cat/>}></Route>
        <Route path="/Router"  element={<Router/>}></Route>
        <Route path="/Router/:id"  element={<Router/>}></Route>
      </Routes>
    </StContainer>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;
