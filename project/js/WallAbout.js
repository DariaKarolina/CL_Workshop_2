import React, {Component} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";


export class WallAbout extends Component{
    render(){
        const WallAbout = styled.div
        `
            width: 100%;
            height: 100vh;
            background-color: antiquewhite;
        `

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

        `
        const AboutText = styled.div
        `
            font-family: 'Just Me Again Down Here', cursive;
            font-size: 36px;
            color: whitesmoke;
            width: 800px;
            position: relative;
            left: -165px;
            top: 70px;
            z-index: 2;
        `
        const AboutHeader = styled.div
        `
            font-family: 'Just Me Again Down Here', cursive;
            font-size: 50px;
            font-weight: 700;
            color: lavenderblush;
            position: relative;
            left: 280px;
            z-index: 2;
            

        `

        return <WallAbout>
                <ChalkBoard>
                    <AboutHeader>About Us</AboutHeader>
                    <AboutText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis leo metus. Nulla luctus ante id sem laoreet euismod. Morbi eleifend sem ac dui condimentum rhoncus. Ut tincidunt, neque non blandit efficitur, nisi lacus auctor eros, vel aliquam mauris enim quis diam. Nunc semper, magna nec sodales scelerisque, ligula tortor interdum ipsum, in elementum lacus metus rhoncus eros. Sed feugiat tincidunt lectus id tincidunt. Vestibulum justo ante, venenatis in urna in, dapibus dictum sapien.
                    </AboutText>
                    </ChalkBoard>
            </WallAbout>
    }
}