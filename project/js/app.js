import React, {Component} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";
// import "./style.css";
import {MainPage} from "./MainPage";
import {Nav} from "./Nav";
import {ContainerCards} from "./ContainerCards";
import { WallContact } from "./WallContact";
import { WallAbout } from "./WallAbout";
import {WallWords} from "./WallWords1";


function App(){
    
    return (
        <>
            
            <MainPage></MainPage>
            {/* <WallAbout /> */}
            {/* <WallContact /> */}
            {/* <WallWords /> */}
            {/* <ContainerCards /> */}
           
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));
