import {UvIndex} from "./uv-index";

export function ApiWidget({img, title, type}){
    console.log("ApiWidget")
    switch (type){
        case "uv":
            return (
                <div className={"api-widget"}><img src={img} alt={"UV-Index"} width={"150px"} height={"150px"}/><UvIndex lng={48.084} lat={16.422}></UvIndex></div>
            )
        case "weather":
            return(<div className={"api-widget"}><img src={img} alt={"Wetter"} width={"150px"} height={"150px"}/>{title}</div>)
        case "pollen":
            return(<div className={"api-widget"}><img src={img} alt={"Pollendienst"} width={"150px"} height={"150px"}/>{title}</div>)
        default:
            return(<div></div>)
    }

}
