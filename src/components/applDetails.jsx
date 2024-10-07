import React from "react";
import "../style/applDetails.css";

export default class ApplDetails extends React.Component{
    render(){
        return(
<>
        <div id="ApplDetails" style={{display:"flex",flexWrap:"wrap",justifySelf:"self-start",padding:"10px 200px",}}>

        <div id="ApplDetailsDiv1"><img src="/assets/images/applDetailsPhoneImg.png"></img></div>
        
        <div id="ApplDetailsDiv2">
        <img id="applDetailsImg" src="/assets/images/applDetails Img.png"></img>
        <img class="applDetailsStore" src="/assets/images/applDetailsImgAppStore.png"></img>
        <img class="applDetailsStore" src="/assets/images/applDetailsImgGplay.png"></img>

        <span>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</span>

        </div>

       
        </div>
        <div id="applDetailsImgFooter">TM & Copyright 2024 Burger King Company LLC. All Rights Reserved. | Do Not Sell Or Share My Personal Information</div>
</>
    )
    }
    }