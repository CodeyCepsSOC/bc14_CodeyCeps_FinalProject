import './eventscard.css'
import { supabase } from '../../../Utility/config/index'
import { useEffect, useState } from 'react'
export default function EventsCard(props) {

    const {img, title, description, date, time, attendees, id, location, user} = props
    const [attending, setAttending] = useState(false)

    useEffect(() => {
        if (user && attendees) {
            setAttending(attendees.find(attendee => attendee.id === user.id))
        }
    }, [user, attendees])

    async function joinEvent(eventId, userId){
        console.log('Joining event ' + eventId + ' with user ' + userId)
        // check if the user is logged in
        if (!user) {
          console.log('User is not logged in')
          return
        }

        if (!user.firstName) {
          console.log('User does not have a name')
          return
        }
      
        // check if the user is already an attendee
        if (attendees.find(user => user.id === userId)) {
          setAttending(true)
          return
        }

        
        if(!attending && user.firstName) {
        attendees.push({id: userId, name: user.firstName})
        }
        let { data, error: updateError } = await supabase
          .from('events')
          .update({ attendees })
          .eq('id', eventId)
          setAttending(true)
      
        if (updateError) {
          console.error(`Failed to update event with ID: ${eventId}. Error: ${updateError}`)
          return
        }
      
        console.log('Event joined')
      }
      

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
                            {attendees?.length>0?<p>Event will be attended by {attendees[0].name} and {attendees.length-1} others </p>:<p>Be the first to sign up for this walk!</p>}
                        </div>
                    
                     </div>
        </div>
        <div className="additional-event-details">
            <h2>{description}</h2>
            {attending?<h1>See You There!</h1>:<button className="event-button" onClick={()=> joinEvent(id, user?.id)}><img src="icons/join.svg" alt="join event button" id="join-button"/>Join Event</button>}
        </div>
        </div>
        </div>
    )
}