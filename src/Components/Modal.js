import React, { useState } from "react";
import { actionCreate } from "../Actions";
import '../CSS/Modal.css';
import { store } from "./Home";

let lastId = 20;
export default function Modal({isOpen}) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    

    function handleSubmit(e) {
        lastId += 1; 
        store.dispatch(actionCreate(lastId, title, body));
        isOpen();   
        alert("Post Successful!")
    }
    return(
        <div className="modal">
            <input onChange={(e)=>{setTitle(e.target.value)}} className = "modal-input" placeholder="Title..."></input>
            <textarea onChange={(e)=>{setBody(e.target.value)}} className= "modal-input" id="body"  placeholder="Body..."></textarea>
            <button onClick={handleSubmit} className="modal-add-button">Submit</button>
        </div>
    )
}