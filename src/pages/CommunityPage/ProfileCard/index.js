import "./profilecard.css";

export default function ProfileCard(props) {
  return (
<div className="profile-card">
    <div id="profile-header">
        <img src={props.profileimage} id="profile-picture" alt={props.name + "profile image"} />
        <h1>{props.name}</h1>
    </div>
    <i id="profile-quote">"{props.quote}"</i>
    <div id="interests-section">
        <h2> {props.name}'s Interests </h2>
        <div id="interests-icons">
            {props.interests.map((interest)=> {
                return <img src={`/icons/${interest}.svg`} alt={interest} />}
            )} 
        </div>
    </div> 
</div>
  );
}