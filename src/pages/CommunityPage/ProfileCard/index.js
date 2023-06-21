import './profilecard.css'

export default function ProfileCard(props) {



    return (
        <div className="profile-card">
            <div id="profile-header">
            <img src={props.profileimage} id="profile-picture" alt={props.name + 'profile image'}/>
            <h1>{props.name}</h1>
            </div>      
        </div>
    )
}