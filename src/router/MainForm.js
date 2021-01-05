import React from 'react'
import { useLocation } from 'react-router-dom'
import Failed from './Failed';
import Success from './Success';
import Register from './Register'
import Checkin from './Checkin'
import Error from './Error'
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
    return (
        <div>
            <h1>Main form</h1>
            
            {/* <div>Eventid = {eventid}</div> */}
            <div>renderSwitch: {renderSwitch(type)}</div>
        </div>
    )
}
