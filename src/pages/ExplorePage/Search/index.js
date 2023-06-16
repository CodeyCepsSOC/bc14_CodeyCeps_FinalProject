import React, { useState, useEffect } from "react";
import "./search.css"

export default function Search(props) {
const [inputVal, setInputVal] = useState("")
function submitSearch () {
    props.setLocation(inputVal)
}

return (

    <form className="search" onSubmit={(e) => e.preventDefault()}>
        <label className="searchlabel" aria-hidden="false" htmlFor="searchField">Where do you want to walk?</label>
        <input type="text" placeholder="Enter a location..." id="searchField" onChange={(e) => setInputVal(e.target.value)} />
        <button onClick={submitSearch}>Search</button>
    </form>
)
}

/* 
Created a form element - within this it contains a label (for accessbility, this does not display due to css display none
but the aria-hidden="false" means it will still get read by screenreader), input field (this contains an onChange function that
tracks what is written in the input field) and a button (which at some point will have a function attached to it for searching).
The useState is used in the onChange function to store the state of what is typed.
*/