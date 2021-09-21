import React,{useState} from 'react'


export default function AddDevice(props) {

    //call the function saveValue and hide the component AddDevice
    const add = () => {
        props.setAddDevice(false)
        saveValue()

    }

    //Save the device from the select option and push it to the main object in the room array
    
    const saveValue = () => {
        const element = document.getElementById("kind")
        const selectedValue = element.value
        let light = "red"
        const stereo = props.room[props.roominx].products.filter((item)=> item == "stereo system")

        if(props.room[props.roominx].products.length>4){
            alert("error: max 5 products")
        }
        
        else if(props.room[props.roominx].kind != "bath" && selectedValue == "Water Heater"){
            alert("error: water heater can be just in the bathroom")
        }

        else if(stereo.length == 1 && selectedValue == "stereo system"){
            alert("error: can`t have more then one stereo system in the room")
        }
        else{
        props.setDevice([props.room[props.roominx].products.push(selectedValue)])
        props.setDevice([props.room[props.roominx].deviceOnOff.push(light)])}
        console.log(props.device);

    }

    return (
        <div>
            <select id="kind">
                <option value="Air-Conditioner">Air-Conditioner</option>
                <option value="Water Heater">Water Heater</option>
                <option value="stereo system">stereo system</option>
                <option value="lamp">lamp</option>
            </select>
            <br></br>
            <button onClick={add}>add</button>

        </div>
    )
}
