import { React, useEffect, useState } from 'react';
import { actionCreate, actionDelete, actionSearch, fetchPosts} from '../Actions';
import { applyMiddleware, createStore} from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import '../CSS/Home.css'

function reducer (state=[], action) {
  switch(action.type) {
    case "GET": return action.payload
    case "CREATE" : {
        const data = action.payload;
        return([...state , actionCreate(data.id, data.title, data.body)])
    }
    case "DELETE" : {
        return state.filter(ele => ele.id != action.payload.id);
    }
    case "SEARCH" : {
        return state.filter(ele => ele.id == action.payload.id);
    }

    default: return state
  };
}

const store = createStore(reducer, applyMiddleware(thunk));


function capitalize(string) {
    const str = string;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
}

function SearchBar() {
    
    const dispatch = useDispatch();

    function handleSearch(e) {
        e.preventDefault();
        if(e.target.value == '') {
            dispatch(fetchPosts())
        }
        else {
            dispatch(actionSearch(e.target.value));
        }
        
    }

    return(
        <form className='search'>
            <input onChange ={handleSearch} className='search-field' type="field" placeholder='Search by ID...'></input>
        </form>
        
    )
}



function Elements() {
    const arr = useSelector(state => state);
    const dispatch = useDispatch();


    useEffect(()=> {
        dispatch(fetchPosts());
    }, [])

    function handleDelete(e) {
        dispatch(actionDelete(e.target.value));
        console.log(e.target.value)
    }

    function handleEdit(e) {
        console.log("Editting post " + e.target.value);
    }
    const listItems = arr.map((val)=> (
        <li key={val.id} className='post'>
            <button className='post-button' onClick={handleDelete} value={val.id}>Remove</button>
            <button className='post-button' onClick={handleEdit} value={val.id}>Edit</button>
            <div className='post-heading'>
                {capitalize(val.title)}
            </div>

            <div className='post-body'>
                {capitalize(val.body)}
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
    return (
        <Provider store={store}>
            <SearchBar />
            <h2 className='site-heading'>Posts</h2>
            <Elements />
        </Provider>
    )
}
