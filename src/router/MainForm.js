import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import Failed from './Failed';
import Success from './Success';
import Register from './Register'
import Checkin from './Checkin'
import Error from './Error'
import firebase from '../utils/firebase'
export default function MainForm(props) {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();
    const eventid = query.get("eventid")
    const type = query.get("type")
    console.log('eventid',eventid)
    console.log('type: ',type)

    function renderSwitch(type) {
        switch (type) {
            case 'checkin':
                return <Checkin/>  
                //  go to the checkin component to verify and from the result 
                //     handle other case (push url to the right handler ex. not found push to failed url 
                //     location and then return to this page)
                // ## to a loading component (put screen to load screen or just handle it in the checkin component????)
            case 'failed':
                return <Failed />
            case 'success':
                return <Success />
            case 'register':
                return <Register />
            default:
                return <Error/>;
        }
    }
    const [number,setNumber] =useState('')
    const handleOnchange = (e)=>{
        setNumber(e.target.value)
    }
    const createNumber =() =>{
        const numRef = firebase.database().ref("number")
        const numm={
            number,
            inCheckin:false,
        }
        numRef.push(numm)
    }
    return (
        <div>
            {/* <h1>Main form</h1> */}
            {/* <div>Eventid = {eventid}</div> */}
            <div>{renderSwitch(type)}</div>


            {/* <input type="text" onChange={handleOnchange} value={number}></input>
            <button onClick={createNumber}>create data in db</button> */}


        </div>
    )
}
