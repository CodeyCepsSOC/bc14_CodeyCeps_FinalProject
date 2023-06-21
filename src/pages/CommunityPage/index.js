import ProfileCard from "./ProfileCard"
import EventsCard from "./EventsCard"
import { CommunityPageEvents } from "./EventsCard/CPdata"

function handleClick(){

}

export default function CommunityPage(props) {



    return (
    <div id="community-page">
        <h1>community page</h1>
        <ProfileCard name="Sami" profileimage="./hilda.png"/>
        <div> {CommunityPageEvents.map((event, index) => <EventsCard {...event} 
        key={index}/>
        )}
        <button className="event button" onClick={handleClick}>Join Event</button>
        </div>
    </div>
    
    )}