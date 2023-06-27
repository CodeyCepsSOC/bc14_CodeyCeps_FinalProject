export default function CarouselCard(props) {

const {img, title, date, time} = props

    return (
        <div className="carousel-card">
                <img className="event" src={img} alt="beautiful route"/>
                <div className="legend">
                    <h2>{title}</h2>
                    <div className="event-details">
                        <div className="date">
                            <p>{date}</p> 
                            <img className="carousel-icon" src="./icons/calendar.svg" alt="calendar icon"></img>
                        </div>
                        <div className="time">
                            <p>{time}</p>
                            <img className="carousel-time-icon" src="./icons/black-clock.svg" alt="clock icon"></img>
                        </div>
                    </div>
                </div>
        </div>
    )}