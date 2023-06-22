import './eventscard.css'
export default function EventsCard(props) {

    const {img, title, description, date, time, attendees} = props

    return (
        <div className="events-card">
            <img className="event" src={img} alt="beautiful route"/>
            <div className="legend">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{date}</p>
                    <p>{time}</p>
                    <p>{attendees}</p>
                    <button className="event-button">Join Event</button>
        </div>
        </div>
    )
};