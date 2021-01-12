import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import firebase from '../utils/firebase'
import './Checkin.scss'
// import BasicForm from '../component/BasicForm'
// import Btn from '../component/Btn'
import { Form, Button } from 'react-bootstrap'

export default function Checkin() {
    const infoRef = firebase.database().ref("user")
    // const [fromDB,setFromDB]= useState({})
    var fromDB = {}
    infoRef.on('value', snapshot => {
        fromDB = snapshot.val()
        // console.log(snapshot.val())
    })

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery();

    const [input, setInput] = useState('');
    const history = useHistory();

    const eventid = query.get("eventid")

    console.log('isthis undefined:', fromDB)
    const handleSubmit = (event) => {
        event.preventDefault();
        const userNumArr = Object.keys(fromDB).map((key, index) =>
            new Object({ "telno": fromDB[key].userinfo.telno, "isCheckin": fromDB[key].userinfo.isCheckin, "userid": key })
        )
        console.log(userNumArr)
        let obj = userNumArr.find(o => o.telno === input);
        // console.log(obj)
        if (!obj || obj === undefined) {
            history.push('/event/?eventid=0001&type=failed' + '&num=' + input)
            // console.log(obj)
        }
        else {
            if (!obj.isCheckin) {
                const current = new Date().toString()
                infoRef.update({
                    [obj.userid + "/userinfo/isCheckin"]: true,
                    [obj.userid + "/userinfo/checkInDateTime"]: current
                });
                history.push('/event/?eventid=0001&type=success' + '&num=' + input)

            }
            else {
                history.push('/event/?eventid=0001&type=failed' + '&num=' + input)
            }
            // console.log('found',obj)
            // if (!obj.isCheckin) console.log('found: not checkin',obj)
            // else console.log('found: checked in (failed1): ',obj)
        }
    }
    return (
        <div>
            <h2>Event: {eventid}</h2>

            <Form onSubmit={handleSubmit}>
                <div className="search-group-div">
                    <Form.Label className="search-group-label">
                        โปรดระบุเบอร์โทรศัพท์ :
                    </Form.Label>
                    <div >
                        <Form.Control
                            className="search-group-form"
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder='0XX-XXX-XXXX'
                        />
                    </div>
                    <div className="search-group-btn-div">
                        <Button className="search-group-btn" variant="primary" type="submit" value="Submit" >Submit</Button>
                        <div><a href='/event/?eventid=0001&type=register'>register</a></div>
                    </div>
                </div>
            </Form>
        </div>
    )
}
