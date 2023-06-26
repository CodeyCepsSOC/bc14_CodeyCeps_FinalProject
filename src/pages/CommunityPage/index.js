import ProfileCard from "./ProfileCard"
import EventsCard from "./EventsCard"
import { CommunityPageEvents } from "./EventsCard/CPdata"
import PageHeader from './PageHeader'
import './communitypage.css'

export default function CommunityPage(props) {

    return (
    <div id="community-page">
        <PageHeader sectionName='Meet Our Community' />
        <div id="profiles-container">
            <ProfileCard name="Helen" profileimage="./hilda.png" quote="WalkMate is a gamechanger! I love their regular events, they are so organised and they have the best routes" interests={['cycling', 'gaming', 'skiing', 'basketball']} nextwalk={{title: 'Forest Fun Trail', time: '14:30 6th June', img: './walk1.jpeg'}}/>
            <ProfileCard name="Steve" profileimage="./hilda.png" quote="WalkMate is a gamechanger! I love their regular events, they are so organised and they have the best routes" interests={['cycling', 'gaming', 'skiing', 'basketball']} nextwalk={{title: 'Forest Fun Trail', time: '14:30 6th June', img: './walk1.jpeg'}}/>
            <ProfileCard name="Jim" profileimage="./hilda.png" quote="WalkMate is a gamechanger! I love their regular events, they are so organised and they have the best routes" interests={['cycling', 'gaming', 'skiing', 'basketball']} nextwalk={{title: 'Forest Fun Trail', time: '14:30 6th June', img: './walk1.jpeg'}}/>
        </div>
        <PageHeader sectionName='Upcoming Events' />
        <div className="events-container"> 
        {CommunityPageEvents.map((event, index) => <EventsCard {...event} key={index}/>
        )}

        </div>
    </div>
    
    )}