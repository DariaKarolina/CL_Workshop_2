import React, {Component} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";

import {Tile} from "./Tile"
import {TileFront} from "./TileFront";


export class ContainerCards extends Component{
    render(){

    
        const ContainerCards = styled.div`
        width: 1200px;
        height: 600px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 60px;
        margin-bottom: auto;
        `
        return <ContainerCards className="Container">
            <TileFront />    <Tile />    <Tile />    <Tile />
            <Tile />    <Tile />    <Tile />    <Tile />
            <Tile />    <Tile />    <Tile />    <Tile />
            <Tile />    <Tile />    <Tile />    <Tile />
            <Tile />    <Tile />    <Tile />    <Tile />
        </ContainerCards>
    }
}