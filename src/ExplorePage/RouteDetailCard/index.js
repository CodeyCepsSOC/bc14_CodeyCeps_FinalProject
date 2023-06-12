//card on side of map to display info about route

import { useEffect } from "react"

export default function RouteDetailCard (props) {


    useEffect( () => { 

    }, [])

return (
<div className="route-detail-card">
    <h2>{props.name}</h2>
    <section className="icons">
        <div className="route-time">
            <img src="https://img.icons8.com/ios/50/000000/clock--v1.png" alt="clock icon" />
            <p>{props.time}</p>
        </div>
        {props.icons.map( (icon, index) => {return <img key={index} src={`../../../public/${icon}.png`} alt="icon" />})}
    </section>
    <p>{props.description}</p>
</div>)
}