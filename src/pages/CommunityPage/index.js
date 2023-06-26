import ProfileCard from "./ProfileCard"
import EventsCard from "./EventsCard"
import { CommunityPageEvents } from "./EventsCard/CPdata"
import PageHeader from './PageHeader'
import './communitypage.css'
import { useEffect, useState } from "react"
import { supabase } from "../../Utility/config"

export default function CommunityPage(props) {
// on load, fetch all events from database
// on load, fetch all users from database
// on load, fetch all user events from database
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
                difficulty
            )
        `)
        if (error) console.log(error)
        console.log(data)
    }
    

    fetchEventsWithRouteDetails()
}, [])


    return (
    <div id="community-page">
        <PageHeader sectionName='Meet Our Community' />
        <div id="profiles-container">
            <ProfileCard name="Sami" profileimage="./hilda.png" quote="WalkMate is a gamechanger! I love their regular events, they are so organised and they have the best routes" interests={['cycling', 'gaming', 'skiing', 'basketball']} nextwalk={{title: 'Forest Fun Trail', time: '14:30 6th June', img: './walk1.jpeg'}}/>
            <ProfileCard name="Sami" profileimage="./hilda.png" quote="WalkMate is a gamechanger! I love their regular events, they are so organised and they have the best routes" interests={['cycling', 'gaming', 'skiing', 'basketball']} nextwalk={{title: 'Forest Fun Trail', time: '14:30 6th June', img: './walk1.jpeg'}}/>
            <ProfileCard name="Sami" profileimage="./hilda.png" quote="WalkMate is a gamechanger! I love their regular events, they are so organised and they have the best routes" interests={['cycling', 'gaming', 'skiing', 'basketball']} nextwalk={{title: 'Forest Fun Trail', time: '14:30 6th June', img: './walk1.jpeg'}}/>
        </div>
        <PageHeader sectionName='Upcoming Events' />
        <div className="events-container"> 
        {CommunityPageEvents.map((event, index) => <EventsCard {...event} key={index}/>
        )}

        </div>
    </div>
    
    )}