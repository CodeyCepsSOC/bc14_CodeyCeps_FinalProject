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
<div style={backgroundStyling} className="route-detail-card" onClick={()=> props.onClick(props.index)}>
    <div className="route-details">
        <h2>{props.name}</h2>
        <section className="icon-bar">
            <div className="route-time">
                <img src="./icons/clock.svg" alt="clock icon" id="clock-icon"/>
                <p id="time-text">{props.time}</p>
            </div>
            {props.icons.map( (icon, index) => {return <img key={index} src={`./icons/${icon}.svg`} alt={`${icon}`} className="icon"/>})}
        </section>
        <div className="button-container">
            <button className="details-button" onClick={() => props.onClickButton(props.index)}>More info...</button>
        </div>
    </div>
</div>)
}

/*
This is the component for the route detail card.
The information will get passed down as props from the explore page.
The icons are mapped over to display the icons that are passed down. 
The images are stored in the public folder and depending on what .
*/