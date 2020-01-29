import React, {Component} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";

export class Nav extends Component{

    render(){
        const Nav= styled.div
        `
            width: 950px;
            height: 500px;
            display: flex;
        `
        
        const NavItem= styled.div
        `
            width: 250px;
            height: 200px;
            background-image: url("./img/speech-bubble6.png");
            background-size: contain;
            background-repeat: no-repeat;
            opacity: 1;
            :hover {
                opacity: 0.9;
                cursor: pointer;
            }
            
        `
        const NavItem1={
            position: "absolute",
            bottom: "50px",
            left: "-10px",
            transform: "rotate(-115deg)"
            
        }

        const NavItem2={
            position: "absolute",
            bottom: "240px",
            left: "285px",
            height: "250px",
        }

        const ParagAbout={
            color: "palevioletred", 
            fontSize: "56px",
            position: "absolute",
            left: "45px",
            top: "47px",
            fontFamily: "Permanent Marker",
            fontWeight: "400"
        }
        const NavItem3={
            position: "absolute",
            bottom: "60px",
            left: "550px",
            transform: "rotate(40deg)",
            width: "300px",
            height: "250px"
        }

        const Item1Img= styled.div
        `
            background-image: url("./img/contact.png");
            background-size: contain;
            width: 135px;
            height: 135px;
            position: absolute;
            bottom: 47px;
            left: 53px;
            
        `
        const Item3Img=styled.div
        `
            background-image: url("./img/dictionary.svg");
            background-size: contain;
            width: 115px;
            height: 115px;
            position: absolute;
            top: 45px;
            left: 100px;
        `
        return  <Nav>
                    <NavItem style= {NavItem1}>
                        <Item1Img style={{transform: "rotate(115deg)"}}/></NavItem>
                    <NavItem style= {NavItem2}><p style={ParagAbout}>About</p></NavItem>
                    <NavItem style= {NavItem3}>
                        <Item3Img style={{transform: "rotate(5deg)"}}/>
                    </NavItem>
                </Nav>
    }
}