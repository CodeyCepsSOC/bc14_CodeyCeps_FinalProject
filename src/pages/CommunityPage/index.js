import ProfileCard from "./ProfileCard"
import EventsCard from "./EventsCard"
import { CommunityPageEvents } from "./EventsCard/CPdata"
import './communitypage.css'

export default function CommunityPage(props) {

    return (
    <div id="community-page">
        <h1>community page</h1>
        <ProfileCard name="Sami" profileimage="./hilda.png" quote="WalkMate is a gamechanger! I love their regular events, they are so organised and they have the best routes" interests={['cycling', 'gaming', 'skiing', 'basketball']} nextwalk={{title: 'Forest Fun Trail', time: '14:30 6th June', img: './walk1.jpeg'}}/>

        
        <div className="events-container"> 
        {CommunityPageEvents.map((event, index) => <EventsCard {...event} key={index}/>
        )}

        </div>
    </div>
    
    )}