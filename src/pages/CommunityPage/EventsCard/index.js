import './eventscard.css'
export default function EventsCard(props) {

    const {img, title, description, date, time, attendees} = props

    return (
        <div className="events-card">
            <img className="event" src={img} alt="beautiful route"/>
            <div className="legend">
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
                    <button className="event-button">Join Event</button>
                     </div>
        </div>
        </div>
    )
};