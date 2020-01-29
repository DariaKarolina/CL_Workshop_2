import React, {Component} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";

import {Nav} from "./Nav.js";

export class MainPage extends Component{
    
    render(){
        
        const MainPage = styled.div
        `
            width: 100%;
            height: 100vh;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            justify-content: flex-start;
            margin-left: auto;
            margin-right: auto;
            background-image: url("./img/kid-learning-language2.jpg");
            backgroung-size: cover;
            backgroung-color: beige;
            background-repeat: no-repeat;
            background-position: center center;
            object-fit: contain;
            filter: grayscale(33%);
            overflow-y: hidden;
        `
        const Logo= styled.p
        `
            width: 430px;
            padding-left: 25px;
            padding-top: 15px;
            font-size: 48px;
            font-weight: 700;
            font-family: Comfortaa;
            border: 3px dashed transparent;
            align-self: flex-start;
            position: relative;
            left: 120px;
            color: whitesmoke;
            :hover {
                background-color: silvergrey;
                opacity: 0.15;
                cursor: pointer;
                color: black;
                border-radius: 60px;
            }
        `

        return <MainPage>
                    <Nav/>
                        <Logo >FunLanguages<br/><span style={{color: "mistyrose", paddingLeft:"260px"}}>.com</span></Logo>
                </MainPage>
    }
}