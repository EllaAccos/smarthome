import './App.css';
import React,{useState} from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import NewRoom from './components/NewRoom';
import RoomButtons from './components/RoomButtons';
import RoomDescription from './components/RoomDescription';
import AddDevice from './components/AddDevice';


function App() {

 //hooks
  const [roomName,setRoomName]=useState("")
  const [roomColor,setRoomColor]=useState("")
  const [roomKind,setRoomKind] = useState("")
  const [path,setPath] = useState('#')
  const [room,setRoom] = useState([])
  const [roomPath,setRoomPath] = useState([])
  const [device,setDevice] = useState([])
  const [roomIndex,setRoomIndex] = useState(0)
  const [roomIndex1,setRoomIndex1] = useState(0)




//check the input and set the name in the roomName hook
  const roomNameLength = (e) => {
    setRoomName(e.target.value)
    setPath('/')

  }

//create button in the newRoom component
//check the length of the roomname and set the list of object for the room
//also set every key in the hook to "" if roomName>5 || <1 
  const create = () => {
    if(roomName.length>5 || roomName.length <1){
      setPath('/')
      alert('error')
      setRoomName("")
      setRoomColor("")
      setRoomKind("")
    }
    else{
      addOne(roomIndex)
      setRoom([...room,{kind:roomKind,nameOfRoom:roomName,color:roomColor,index:roomIndex,pathOfRoom:"/room"+roomName,products:[],deviceOnOff:[]}])
      setRoomName("")
      setRoomColor("")
      setRoomKind("")
    }
  }

  //set roomIndex1 in RoomButtons component onClick
  const goToRoom = (index) => {
    setRoomIndex1(index)
    console.log(roomIndex1);
  }

  //add 1 to roomIndex
  const addOne = (num) => {
    let temp = num
    temp++
    setRoomIndex(temp)
  }

  return (
    <div className="App">
      <h1 id="smartTitle">Smart House</h1>
      <Router>
        <Switch>
          <Route exact path='/' >
            <HomePage room={room} roomPath={roomPath} goToRoom={goToRoom} roomIndex1={roomIndex1}/>
          </Route>

          <Route exact path="/">
            <RoomButtons />
          </Route>

          <Route exact path='/NewRoom'>
            <NewRoom roomName={roomName} roomKind={roomKind} setRoomKind={setRoomKind} roomNameLength={roomNameLength} create={create} path={path} setRoomColor={setRoomColor}/>
          </Route>

          <Route exact path={room.path}>
            <RoomDescription room={room} setRoom={setRoom} device={device} setDevice={setDevice} goToRoom={goToRoom} roomIndex1={roomIndex1}/>
          </Route>

          <Route exact path={room.path}>
            <AddDevice/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
