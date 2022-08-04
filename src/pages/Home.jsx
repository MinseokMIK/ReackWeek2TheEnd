import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const navigate = useNavigate();
    return <div>
        <h1>메인 화면이에요</h1>
        <button onClick = {()=>{navigate("/Cat")}}>고양이로 가기</button></div>;
};

export default Home;