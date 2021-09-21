import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import RoomButtons from './RoomButtons'
import homePage from './homePage.css'

export default function HomePage(props) {
    
    return (
        <div>
            <div>
                <RoomButtons room={props.room} roomPathFunc={props.roomPathFunc} roomPath={props.roomPath} roomButtonIndex={props.roomButtonIndex} setRoomButtonIndex={props.setRoomButtonIndex} goToRoom={props.goToRoom}/>
            </div>
            <div>
                <Link to='/NewRoom'><button id="plus">+</button></Link>
            </div>
        </div>
    )
}
