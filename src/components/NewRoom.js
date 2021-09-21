import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import newRoom from './newRoom.css'

export default function NewRoom(props) {
    
    //set the room`s kind in the app hook
    const roomKind = () =>{
        const element = document.getElementById("kind")
        const selectedValue = element.value
        props.setRoomKind(selectedValue)
    }
    
    return (
        <div>
            <select onClick={roomKind} id="kind">
                <option value="null">-</option>
                <option value="bath">bath</option>
                <option value="bedroom">bedroom</option>
                <option value="kitchen">kitchen</option>
            </select>
            <br></br>
            <input onChange={props.roomNameLength} placeholder="room's name"/>
            <br></br>
            <input onChange={(v)=>(props.setRoomColor(v.target.value))} placeholder="room's color"/>
            <br></br>
            <Link to={props.path}><button id="createB" onClick={props.create}>CREATE</button></Link>

        </div>
    )
}
