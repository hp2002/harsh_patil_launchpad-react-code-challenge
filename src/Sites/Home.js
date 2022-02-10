import { React, useEffect } from 'react';
import { actionCreate } from '../Actions';
import { createStore } from 'redux';
import '../CSS/Home.css'

function reducer (state=[], action) {
  switch(action.type) {
    case "CREATE": return [...state, {
      userId: 1,
      id: action.payload.id,
      title: action.payload.title,
      body: action.payload.body,
    }]
    // case "REMOVE":
    // case "UPDATE":
    // case "DELETE":
    default: return state
  };
}
const store = createStore(reducer);
let dataRecieved = false;

function Capitalize(string) {
    const str = string;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2 ;
}

function Elements() {
    const arr = store.getState();
    const listItems = arr.map((val, index)=> (
            <li key={val.id} className='post'>

                <div className='post-heading'>
                    {Capitalize(val.title)}
                </div>

                <div className='post-body'>
                    {Capitalize(val.body)}
                </div>

                <div className='post-id'>
                    ID: {val.id}
                </div>

            </li>
        )
    )
    return(
        <ul>{listItems}</ul>
    )
}


export default function Home() {
useEffect(()=> {
    if(!dataRecieved) {
        fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20')
        .then(response=>response.json())
        .then(data=>{
            for(let i=0; i<data.length; i++) {
                const action = actionCreate(data[i].id, data[i].title, data[i].body);
                store.dispatch(action);
            }
        });
        dataRecieved=true;
    }
    console.log(store.getState())
    
    });

    return (
        <div>
            <h2 className='site-heading'>Homepage</h2>
            <Elements />
        </div>
    )
}
