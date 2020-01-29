import React, {Component} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";

export class WallContact extends Component{
    render(){
        const WallContact = styled.div
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
        const ContactText = styled.div
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
        const ContactHeader = styled.div
        `
            font-family: 'Just Me Again Down Here', cursive;
            font-size: 50px;
            font-weight: 700;
            color: mistyrose;
            position: relative;
            left: 280px;
            z-index: 2;
            

        `

        const ContactMap = styled.div
        `
            width: 500px;
            height: 300px;
            position: relative;
            left: -120px;
            border: 1px solid white;
        `

        return <WallContact>
                <ChalkBoard>
                    <ContactHeader>Contact Us</ContactHeader>
                    <ContactText>
                        Telephone: (+370) 123 456 789 <br/> E-mail: fun@languages.com <br/> Adress: Gedimino pr. 1, Vilnius 01103, Lithuania
                    </ContactText>
                    <ContactMap>Tu będzie mapka</ContactMap>
                    </ChalkBoard>
            </WallContact>
    }
}