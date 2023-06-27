import './eventscard.css'
import { supabase } from '../../../Utility/config/index'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function EventsCard(props) {

    const {img, title, description, date, time, attendees, id, location, user} = props
    // state used for keeping track of if user is attending or not
    const [attending, setAttending] = useState(false)
    
    const navigate = useNavigate();

    // checks if user is in array of the event, if he is it sets attending to true
    useEffect(() => {
        if (user && attendees) {
            setAttending(attendees.find(attendee => attendee.id === user.id))
        }
    }, [user, attendees])

    // security check to make sure user is logged in and has a profile before they are allowed to sign up for an event
    async function checkLoggedIn() {
      if (!user) {
        alert('you are not logged in! please log in to join events')
        return navigate('/loginpage')
      }

      if (!user.firstName) {
        console.log('User does not have a name')
        return false
      }
      return true;
    }

    async function joinEvent(eventId, userId){
        // check if the user is logged in
        if(checkLoggedIn()) {
      
        // check if the user is already an attendee
        if (attendees.find(user => user.id === userId)) {
          setAttending(true)
          return
        }

        // if they are not attending and do have an account, add them to attendee array and push it to the DB
        if(!attending && user?.firstName) {
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
      }
      };
      
      async function leaveEvent(eventId, userId){
        // check if the user is logged in
        if(checkLoggedIn()) {
        // check if the user is already an attendee
        if (attendees.find(user => user.id === userId)) {
          setAttending(true)
          
        }

        // if user is attending and has a name, remove them from the array and then push new array to DB
        if(attending && user.firstName) {

          let userIndex = attendees.findIndex(user => user.id === userId)
          attendees.splice(userIndex, 1)

          let { data, error: updateError } = await supabase
            .from('events')
            .update({ attendees })
            .eq('id', eventId)
            setAttending(false)

          if (updateError) {
            console.error(`Failed to update event with ID: ${eventId}. Error: ${updateError}`)
            return
          }
        }
      }
    }

    function formatAttendingText() {
      if (!attendees) return;

      if (attendees.length === 0) {
        return 'Be the first to sign up for this walk!'
      }
      if (attendees.length === 1 && attending) {
        return 'You are the first person attending this event!'
      }
      if (attendees.length === 1 && !attending) {
        return `Event will be attended by ${attendees[0].name}`
      }
      
      if (attendees.length === 2 && attending) {
        return 'You and one other person are attending this event!'
      }
      if (attendees.length === 2 && !attending) {
        return `Event will be attended by ${attendees[0].name} and ${attendees[1].name}`
      }
      if (attendees.length > 2) {
        return `Event will be attended by ${attendees[0].name} and ${attendees.length - 1} others`
      }
    }

    

    return (
        <div className="events-card">
          <div className="events-card-scroll">
            <img className="event-image" src={img} alt="beautiful route"/>
            <section className="event-card-details">
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
                            {<p>{formatAttendingText()}</p>}
                        </div>
                     </div>
            </section>
            <section className="additional-event-details">
              <h2>{description}</h2>
              {attending?<button className="event-button" id="leave-button" onClick={()=> {leaveEvent(id, user?.id)}}><img src="icons/leave.svg" alt="join event button" id="join-button"/>Leave Event</button>:<button className="event-button" onClick={()=> joinEvent(id, user?.id)}><img src="icons/join.svg" alt="join event button" id="join-button"/>Join Event</button>}
           </section>
          </div>
        </div>
    )
}