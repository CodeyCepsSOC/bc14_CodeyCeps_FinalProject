//details at a glance (toilets etc.)
import './detailsbar.css'

export default function DetailsBar(props) {
    return (
        <div className="details-bar">
            <div className="icon-and-text">
                <img src="./icons/distance.svg" alt="distance icon" className="bar-icon"/>
                <p>{`${props.distance} km`}</p>
            </div>
            <div className="icon-and-text">
                <img src="./icons/clock.svg" alt="clock icon" className="bar-icon"/>
                <p>{props.time}</p>
            </div>
            {props.icons.map( (icon, index) => {return (
            <div key={index} className="icon-and-text">
                <img src={`./icons/${icon}.svg`} alt={`${icon}`} className="bar-icon"/>
                <p>{icon}</p>
            </div>)})}
        </div>
    )
}