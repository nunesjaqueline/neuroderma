import {ApiWidget} from "./ApiWidget";
import sunlogo from "./images/sun.png"
import pollenlogo from "./images/pollen.png"
import wetterlogo from "./images/wetter.png"

export function ApiWidgetList(){
    return (
        <>
            <ApiWidget img={sunlogo} title={"UV-Index"} type={"uv"}/>
            <ApiWidget img={wetterlogo} title="Wetter" type="weather"/>
            <ApiWidget img={pollenlogo} title="Pollendienst" type="pollen"/>
    </>
    )
}