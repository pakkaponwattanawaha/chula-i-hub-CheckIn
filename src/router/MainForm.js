import React, { useEffect, useState } from 'react'
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
    // const eventid = query.get("eventid")
    const telno = query.get("num")
    const type = query.get("type")
    // console.log('eventid',eventid)
    // console.log('type: ',type)
    
    const infoRef = firebase.database().ref("user")
    var fromDB = {}
    infoRef.on('value', snapshot => {
        fromDB = snapshot.val()
        // console.log(snapshot.val())
    })
    var failedType=""
    const userNumArr = Object.keys(fromDB).map((key, index) =>
        new Object({ "telno": fromDB[key].userinfo.telno, "isCheckin": fromDB[key].userinfo.isCheckin ,"userid":key})
    )
    console.log(userNumArr)
    let obj = userNumArr.find(o => o.telno === telno);
    if (!obj || obj===undefined){
        failedType= "notRegister"
    }
    else {
        failedType="alreadyCheckedIn"
    }
    function renderSwitch(type) {
        switch (type) {
            case 'checkin':
                return <Checkin />
            //  go to the checkin component to verify and from the result 
            //     handle other case (push url to the right handler ex. not found push to failed url 
            //     location and then return to this page)
            // ## to a loading component (put screen to load screen or just handle it in the checkin component????)
            case 'failed':
                return <Failed failedType={failedType}/>
            case 'success':
                return <Success />
            case 'register':
                return <Register />
            default:
                return <Error />;
        }
    }
    const [event, setEvent] = useState({"eid":"","name":"","description":""})
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setEvent((prevState) => ({
            ...prevState,
                [name]: value,
            
        }))
        console.log(event)
    }
    const createNumber = () => {
        const numRef = firebase.database().ref("event")
        numRef.push(event)
    }
    return (
        <div>
            {/* <h1>Main form</h1> */}
            {/* <div>Eventid = {eventid}</div> */}
            <div>{renderSwitch(type)}</div>




        </div>
    )
}
