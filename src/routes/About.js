import React from 'react';
import MyName from '../components/MyName.js'
import YourName from "../components/YourName";

const Home = ({match}) => {
    return(
        <div>
            {match.params.username} 소개
            <MyName name={"클래스형 컴포넌트"}/>
            <YourName name={"함수형 컴포넌트"} age={"16.0.0"}/>
        </div>
    );
};

export default Home;