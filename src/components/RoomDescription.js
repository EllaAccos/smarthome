import React, { useState } from 'react'
import AddDevice from './AddDevice'
import roomDescription from './roomDescription.css'

export default function RoomDescription(props) {

    const [addDevice,setAddDevice] = useState(false)
    const [roominx,setRoominx] = useState(0)
    const [flag,setFlag] = useState(true)

    //turn the buttons on and off (red and green)
    const turnOnOff = (i) => {
        if(props.room[props.roomIndex1].deviceOnOff[i]=="red"){
            props.room[props.roomIndex1].deviceOnOff[i]="green"
            console.log(props.room[props.roomIndex1].products[i]);
        }
        else if(props.room[props.roomIndex1].deviceOnOff[i]="green"){
            props.room[props.roomIndex1].deviceOnOff[i]="red"
            console.log(props.room[props.roomIndex1].products[i]);
        }
        setFlag(!flag)

    }

    //show the component AddDevice
    const showAddDevice = () => {
        setAddDevice(true)
        roomI()
    }


    //func set the index of the room
    const roomI = () =>{setRoominx(props.room[props.roomIndex1].index)}

    return (
        <div>
            <h2>Room Name: {props.room[props.roomIndex1].nameOfRoom}</h2>
            <h2>Room Kind: {props.room[props.roomIndex1].kind}</h2>
            {props.room[props.roomIndex1].products.map((e,index)=>{
            return <button className="device" id={index} onClick={()=>turnOnOff(index)} style={{backgroundColor:props.room[props.roomIndex1].deviceOnOff[index]}}>{e}</button>
            })}
            <br></br>
            <button id="addDevice" onClick={showAddDevice}>add device</button>
            {
                addDevice?<AddDevice roominx={roominx} setAddDevice={setAddDevice}  setDevice={props.setDevice} device={props.device} room={props.room} setRoom={props.setRoom}/>:null
            }
        </div>
    )
}
