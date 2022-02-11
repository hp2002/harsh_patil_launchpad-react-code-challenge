import React from "react";
import '../CSS/Modal.css';

export default function Modal() {

    return(
        <div className="modal">
            <input className = "modal-input" type="field" placeholder="Title..."></input>
            <textarea className= "modal-input" id="body"  placeholder="Body..."></textarea>
            <button className="modal-add-button">Submit</button>
        </div>
    )
}