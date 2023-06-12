//card on side of map to display info about route
import './routedetailcard.css'
//import { useEffect } from "react"

export default function RouteDetailCard (props) {

const backgroundStyling = {
    backgroundImage: `url(${props.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}
return (
<div style={backgroundStyling} className="route-detail-card">
    <div className="route-details">
        <h2>{props.name}</h2>
        <section className="icons">
            <div className="route-time">
                <img src="https://img.icons8.com/ios/50/000000/clock--v1.png" alt="clock icon" id="clock-icon"/>
                <p>{props.time}</p>
            </div>
            {props.icons.map( (icon, index) => {return <img key={index} src={`../../../public/${icon}.png`} alt="icon" />})}
        </section>
        <p>{props.description}</p>
    </div>
</div>)
}

/*
This is the component for the route detail card.
The information will get passed down as props from the explore page.
The icons are mapped over to display the icons that are passed down. 
The images are stored in the public folder and depending on what .
*/