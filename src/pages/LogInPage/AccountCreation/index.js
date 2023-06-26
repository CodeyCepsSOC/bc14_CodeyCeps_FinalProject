import {useState} from "react"
import { supabase } from "../../../Utility/config"
import { useNavigate } from "react-router-dom"

export default function AccountCreation(props) {

const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [profilePic, setProfilePic] = useState("")
const navigate = useNavigate();

// create a submit profile function that checks if the user has entered a first name, last name, and profile picture
// if they have, submit the profile to the database
// if they have not, alert them to fill out all fields
// then query the database for their profile info
// if there is no profile info, redirect to account creation page
// if there is profile info, redirect to explore page

const submitProfile = async () => {

    if (firstName && lastName && profilePic) {
        
        const { data, error } = await supabase
        .from('profiles')
        .insert([
            { first_name: firstName, last_name: lastName, profile_pic: profilePic, account_id: props.session?.user.id },
        ])
        if (error) {
            alert(error)
        }
        else {
            props.setUser({firstName: firstName, lastName: lastName, profilePic: profilePic, id: props.session?.user.id})
            navigate('/explore')
        }
    }
    else {
        alert("Please fill out all fields")
    }
}

    return (
    <div>
        <h1>Hi There! Please Set Up Your Account with some Basic Info To Get Started</h1>
        <form className="account-creation-form" onSubmit={(e) => e.preventDefault()}>
        <div>
            <h1>Select a Profile Picture</h1>
            <img src="./pp1.jpeg" alt="profile option" onClick={()=>setProfilePic("./pp1.jpeg")}/>
            <img src="./pp2.jpeg" alt="profile option" onClick={()=>setProfilePic("./pp2.jpeg")}/>
            <img src="./pp3.jpeg" alt="profile option" onClick={()=>setProfilePic("./pp3.jpeg")}/>
        </div>
        <label className="username-label" aria-hidden="false" htmlFor="first">Enter a First Name</label>
        <input type="text" placeholder="First Name" id="first" onChange={(e) => setFirstName(e.target.value)}/>
        <label className="username-label" aria-hidden="false" htmlFor="last">Enter a Last Name</label>
        <input type="text" placeholder="Last Name" id="last" onChange={(e) => setLastName(e.target.value)}/>
        <button className="searchButton" onClick={()=> {submitProfile(firstName, lastName, profilePic)}}>Save</button>
        </form>
    </div>
    )
}