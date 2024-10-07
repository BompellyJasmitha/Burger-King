import React from "react";

import {TopNavbar,BottomNavbar} from "./navBar";
import Home from "./home";

import Cards from "./cards";
import data from "../assets/cardsData";

import ApplDetails from "../components/applDetails";


export default class App extends React.Component{
    render(){
        return(<>
               <TopNavbar/>
               <Home/>

               <div style={{width:"100%",height:"250vh",marginBottom:"100px",display:"flex",flexWrap:"wrap",justifySelf:"self-start",padding:"10px 180px",}}>{data.map(x=>{return <Cards src={x.imgSrc} h2={x.h2} p={x.p} button={x.button}/>})}</div>

               <ApplDetails/>
               <BottomNavbar/>

               </>)
    }
} 