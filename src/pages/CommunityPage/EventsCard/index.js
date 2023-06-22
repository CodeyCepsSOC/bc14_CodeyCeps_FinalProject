import './eventscard.css'
export default function EventsCard(props) {

    const {img, title, description, date, time, attendees} = props

    return (
        <div className="events-card">
            <div className="events-card-scroll">
            <img className="event-image" src={img} alt="beautiful route"/>
            <div className="event-card-details">
                    <h2>{title}</h2>
                    <div className="time-and-date">
                        <div className="event-date">
                        <img alt="calendar icon" src='/icons/calendar.svg' className="events-icon"/>
                        <p>{date}</p>
                        </div>
                        <div className="event-time">
                        <img alt="clock icon" src='/icons/black-clock.svg' className="events-icon"/>
                        <p>{time}</p>
                        </div>
                    </div>
                    <div className="attendees-and-join">
                        <div className='attendees'>
                            <img src='/icons/users.svg' alt="attendees icon" className="user-icon"/>
                            <p>Event will be attended by {attendees[0]} and {attendees.length-1} others </p>
                        </div>
                    <button className="event-button"><img src="icons/join.svg" alt="join event button"/></button>
                     </div>
        </div>
        <div className="additional-event-details">
            <h1>This is where additional info will go about the events</h1>
        </div>
        </div>
        </div>
    )
};