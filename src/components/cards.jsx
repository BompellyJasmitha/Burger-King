import React from "react";
import "../style/cards.css"


export default class Cards extends React.Component{
    constructor(props){
        super(props)
      }
    render(){
        return(
                <>
                <div class="subcards" >
                    <img src={this.props.src}  class="subcardsimg"></img>
                    <h2 class="subcards_h2">{this.props.h2}</h2>
                    <p class="subcards_p">{this.props.p} </p>
                    <span class="subcards_span">See Terms</span>
                    <button class="subcards_button">{this.props.button}</button>
                </div>
                </>
               
        )

    }

}
