import React from 'react'

export default function Error() {
    return (
        <div>
            <div>Error We cannot find the event</div>
            <button><a href='/event/?eventid=0001&type=checkin'>Check-In</a></button>
        </div>
    )
}
