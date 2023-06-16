import React, { useState, useEffect } from "react";
import "./search.css"

export default function Search(props) {
const [inputVal, setInputVal] = useState("")

return (
    <form className="search">
        <label className="searchlabel" aria-hidden="false" htmlFor="searchField">Where do you want to walk? Search for a location.</label>
        <input type="text" placeholder="Search for a location..." id="searchField" onChange={(e) => setInputVal(e.target.value)} />
        <button id="searchButton">➤</button>
    </form>
)
}

/* 
Created a form element - within this it contains a label (for accessbility, this does not display due to css display none
but the aria-hidden="false" means it will still get read by screenreader), input field (this contains an onChange function that
tracks what is written in the input field) and a button (which at some point will have a function attached to it for searching).
The useState is used in the onChange function to store the state of what is typed.
*/