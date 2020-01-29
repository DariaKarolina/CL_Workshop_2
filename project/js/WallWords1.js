import React, {Component} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";

export class WallWords extends Component{
    render(){
        const WallWords = styled.div
        `
            width: 100%;
            height: 100vh;
            background-color: antiquewhite;
            overflow: hidden;
        `
        const Home = styled.div
        `
            width: 100px;
            height: 100px;
            background-image: url("./img/home.svg");
            background-size: contain;
            background-repeat: no-repeat;
            position: relative;
            top: -40px;
            left: 5px;

        `
        //here, or @ board?
        //add home to other pages
        //make it as a button => home page
        
        

        const ChalkBoard = styled.div
        `
            background-image: url("./img/chalkboard.jpg");
            background-size: contain;
            background-repeat: no-repeat;
            width: 1200px;
            height: 600px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: center;
            margin: 0 260px 60px 260px;
            position: relative;
            top: 60px;
            padding: 20px;

        `
        const Words = styled.ul
        `
            font-family: 'Comfortaa', cursive;
            font-size: 32px;
            color: whitesmoke;
            width: 800px;
            position: relative;
            left: -305px;
            top: 70px;
            z-index: 2;
            list-style: none;
            line-height: 2;
        `
        const WordsHeader = styled.div
        `
            font-family: 'Comfortaa', cursive;
            font-size: 44px;
            font-weight: 700;
            color: azure;
            position: relative;
            left: 280px;
            z-index: 2;
            

        `

        return <WallWords>
                <ChalkBoard>
                    <WordsHeader>Vaisiai - Owoce</WordsHeader>
                    <Words>
                        <li>abrikosas - morela</li>
                        <li style={{position: "relative", left: "40px"}}>avietė - malina</li>
                        <li style={{position: "relative", left: "10px"}}>braškė - truskawka</li>
                        <li style={{position: "relative", left: "35px"}}>cidonija- pigwa</li>
                        <li>datulė - daktyl</li>
                        <li style={{position: "relative", left: "370px", top: "-300px"}}>gervougė - jeżyna</li>
                        <li style={{position: "relative", left: "400px", top: "-290px"}}>kivis- kiwi</li>
                        <li  style={{position: "relative", left: "370px", top: "-280px"}}>kriaušė - gruszka</li>
                        <li  style={{position: "relative", left: "370px", top: "-280px"}}>persikas - brzoskwinia</li>
                        <li  style={{position: "relative", left: "355px", top: "-290px"}}>žemuogė - poziomka</li>
                    </Words>
                    </ChalkBoard>
                    <Home/>
            </WallWords>
    }
}