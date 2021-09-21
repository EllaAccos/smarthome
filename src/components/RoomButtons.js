import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import roomButtons from './roomButtons.css'

export default function RoomButtons(props) {
    return (
        <div>
            {props.room.map((e,index)=>{
                return <Link to={e.pathOfRoom}><button id="roomB" onClick={()=>props.goToRoom(index)} style={{backgroundColor:e.color}}><h1>{e.nameOfRoom}</h1></button></Link>
                })}
        </div>
    )
}
