import React, { useState, useEffect } from 'react';
import { Weather } from "./Weather";
import {UvIndex} from "./uv-index";

export function ApiWidget({img, title, type}){
    const [image, setImage] = useState(img);

        switch (type){
            case "uv":
                return (
                    <div className={"api-widget"}><img src={image} alt={"UV-Index"} width={"150px"} height={"150px"}/><UvIndex lng={48.084} lat={16.422}></UvIndex></div>
                )
            case "weather":
                return(<div className={"api-widget"}><img src={image} alt={"Wetter"} width={"150px"} height={"150px"} /><Weather changeImg={(src)=>{setImage(src)}}></Weather></div>)
            case "pollen":
                return(<div className={"api-widget"}><img src={image} alt={"Pollendienst"} width={"150px"} height={"150px"}/>{title}</div>)
            default:
                return(<div></div>)
        }
    }
