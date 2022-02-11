import { React, useEffect, useState } from 'react';
import { actionCreate, actionDelete, actionSearch, fetchPosts} from '../Actions';
import { applyMiddleware, createStore} from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import Modal from './Modal';
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
        return [action.payload];
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
        <div className='search'>
            <input onChange ={handleSearch} className='search-field' type="field" placeholder='Search by ID...'></input>
        </div>
        
    )
}



function Elements() {
    const arr = useSelector(state => state);
    const dispatch = useDispatch();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [addButtonText, setAddButtonText] = useState("+ Add Post");

    useEffect(()=> {
        dispatch(fetchPosts());
    }, [])

    function handleDelete(e) {
        dispatch(actionDelete(e.target.value));
        console.log(e.target.value);
    }
    
    function handleAdd(e) {
        setModalIsOpen(!modalIsOpen);
        if(!modalIsOpen) {
            setAddButtonText("Cancel");
        }
        else {
            setAddButtonText("+ Add Post");
        }
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
    return( <div>
            <button className='add-post-button' onClick={handleAdd}>{addButtonText}</button>
            {modalIsOpen && <Modal/>}
            <ul>{listItems}</ul>
            </div>
            
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
