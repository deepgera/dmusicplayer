import {SliderCard} from "../components/Card1";
import React from "react";
import {Popularlists} from "../components/popularlist";
import {Player} from "./Player"
import { Typography } from "@material-ui/core";
function Slides(){
    return(
        <div>
               <SliderCard/>
               <div style={{margin:"50px 2px 2px"}}> <Typography style={{fontSize: "24px",fontFamily:"auto",fontWeight:"bold",color:"red",lineHeight: 1.5}}> Popular Artists  </Typography>
               </div> 
                <Popularlists/>
                <Player/>
        </div>
    )
}
export {Slides};