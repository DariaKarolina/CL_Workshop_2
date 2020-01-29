import React, {Component} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";

export class Tile extends Component{

    render(){
        const Tile= styled.div `
            width: 220px;
            height: 130px;
            margin: auto;
            border-radius: 20px;
            background-image: url("./img/gediminas-tower.jpg");
            background-position: center;
            background-size: cover;
            
        `

        return <Tile />
    }
}