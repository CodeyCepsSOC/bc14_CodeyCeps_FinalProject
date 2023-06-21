import ProfileCard from "./ProfileCard"
import EventsCard from "./EventsCard"
import { CommunityPageEvents } from "./EventsCard/CPdata"

function handleClick(){

}

export default function CommunityPage(props) {

    return (
    <div id="community-page">
        <h1>community page</h1>
        <ProfileCard name="Sami" profileimage="./hilda.png" quote="WalkMate is a gamechanger! I love their regular events, they are so organised and they have the best routes" interests={['cycling', 'gaming', 'skiing', 'basketball']} nextwalk={{title: 'Forest Fun Trail', time: '14:30 6th June', img: './walk1.jpeg'}}/>

        
        <div> {CommunityPageEvents.map((event, index) => <EventsCard {...event} key={index}/>
        )}
        <button className="event button" onClick={handleClick}>Join Event</button>
        </div>
    </div>
    
    )}