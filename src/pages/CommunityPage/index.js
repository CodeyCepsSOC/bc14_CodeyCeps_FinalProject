import ProfileCard from "./ProfileCard"
import EventsCard from "./EventsCard"
import PageHeader from './PageHeader'
import './communitypage.css'
import { useEffect, useState } from "react"
import { supabase } from "../../Utility/config"

export default function CommunityPage(props) {

    // state that holds all the events from the DB
    const [events, setEvents] = useState([])

    useEffect(() => {
    // fetch all events from database
    async function fetchEventsWithRouteDetails(){
        
        const { data, error } = await supabase
        .from('events')
        .select(`
            *,
            walks:route_id (
                name,
                difficulty,
                location
            )
        `)
        

        const formattedEvents = data?.map(event => {
            return {
                id: event.id,
                title: event.title,
                description: event.description,
                date: event.date,
                time: event.time,
                attendees: event.attendees,
                location: event.location,
                img: event.img,
                route: event.walks[0]
            }
        })

        setEvents(formattedEvents)
        if (error) console.log(error)
    }
    

    fetchEventsWithRouteDetails()
}, [])


    return (
    <div id="community-page">
        <div className="section1-community">
            <PageHeader sectionName='Meet Our Community' />
            <div id="profiles-container">
                <ProfileCard name="Sandra" profileimage="./assets/profile1-sandra.png" quote="WalkMate has changed my life! I have met so many wonderful people and made great friends. " interests={['cycling', 'skiing', 'dog-friendly']} nextwalk={{title: 'Foraging in Ashdown Forest', time: '09:00 29th August', img: './assets/stanmer_car2.webp'}}/>
                <ProfileCard name="Aatik" profileimage="./assets/profile2-aatik.png" quote="WalkMate is a gamechanger! The events are very well organised and they have the best routes" interests={[ 'gaming', 'basketball', 'coffee-shop']} nextwalk={{title: 'Stanmer Walk and Chat', time: '13:30 7th July', img: './assets/fletcher_car1.jpeg'}}/>
                <ProfileCard name="Rosa" profileimage="./assets/profile3-rosa.png" quote="I am so happy I found WalkMate! I feel much better in myself mentally and physically since joining!" interests={['basketball', 'skiing', 'cycling']} nextwalk={{title: 'Forest Fun Trail', time: '14:30 6th June', img: './assets/fletcher_car4.jpeg'}}/>
            </div>
        </div>
        <div className="orange-line-2"></div>
        <div className="section2-community">
            <PageHeader sectionName='Upcoming Events' />
            <div className="events-container"> 
                {events?.map((event, index) => <EventsCard {...event} key={index} user={props.user}/>
                )}
            </div>
        </div>
    </div>
    
    )};