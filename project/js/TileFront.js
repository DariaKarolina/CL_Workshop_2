import React, {Component} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";

import {Tile} from "./Tile";

export class TileFront extends Component{
    render(){
        const TileFront= styled.div
        `
            width: 220px;
            height: 130px;
            margin: auto;
            border-radius: 20px;
            background-color: #fffffc;
            
            box-shadow: 6px 6px 52px 4px rgba(211, 211, 211, 0.4);
            
        `

        const Text= styled.div
        `
            display: flex;
            justify-content: center;
            padding-top: 42px;
            font-size: 24px;
            font-weight: bold;
            color: #007300;

        `
        return (
            <> 
                <TileFront>
                    <Text>MANĘS ČIA NĖRA</Text>
                </TileFront>
            </>
        )
    }
}