import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory, useLocation } from "react-router-dom";
import firebase from '../utils/firebase'
export default function Register() {
    const infoRef = firebase.database().ref("user")
    const history = useHistory()
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();
    const eventid = query.get("eventid")
    const initFormData = {
        "userinfo": {
            "telno": "",
            "name": "",
            "surname": "",
            "sid": "",
            "faculty": "",
            "years": "",
            "isCheckin": false,
            "checkInDateTime": ""
        },
        "eventinfo":  { "eid": eventid }

    }
    const [formData, setFormData] = useState(initFormData)
    const handleOnchange = (e) => {
        const current = new Date().toString()
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            "userinfo": {
                ...prevState.userinfo,
                [name]: value,
                "isCheckin": true,
                "checkInDateTime": current
            }
        }))
    }

    const handleSubmit = () => {
        // event.preventDefault();
        const current = new Date().toString()
        // console.log('current from in submit',current)
        setFormData((prevState) => ({ /// problem is in this section prevState mean it has to call 2 times???
            ...prevState,
            "userinfo": {
                ...prevState.userinfo,
                "checkInDateTime": current
            }
        }))

        console.log('submitted', formData)
        infoRef.push(formData)
        history.push('/event/?eventid=0001&type=success' + '&num=' + formData.userinfo.telno)
    }
    return (
        <div>
            <h1>REGISTER</h1>
            <h2>Event: {eventid}</h2>
            {/* <div>{JSON.toString(formData.userinfo)}</div> */}
            {/* <div>{current.toString()}</div> */}
            <Form onSubmit={handleSubmit}>
                <div className="search-group-div">
                    <Form.Label className="search-group-label">
                        ชื่อ :
                    </Form.Label>
                    <div className="search-group-form">
                        <Form.Control
                            name="name"
                            type="text"
                            value={formData.userinfo.name}
                            onChange={handleOnchange}
                            placeholder=''
                        />
                    </div>
                    <Form.Label className="search-group-label">
                        นามสกุล :
                    </Form.Label>
                    <div className="search-group-form">
                        <Form.Control
                            name="surname"
                            type="text"
                            value={formData.userinfo.surname}
                            onChange={handleOnchange}
                            placeholder=''
                        />
                    </div>

                    <Form.Label className="search-group-label">
                        รหัสนิสิต :
                    </Form.Label>
                    <div className="search-group-form">
                        <Form.Control
                            name="sid"
                            type="text"
                            value={formData.userinfo.sid}
                            onChange={handleOnchange}
                            placeholder=''
                        />
                    </div>
                    <Form.Label className="search-group-label">
                        คณะ :
                    </Form.Label>
                    <div className="search-group-form">
                        <Form.Control
                            name="faculty"
                            type="text"
                            value={formData.userinfo.faculty}
                            onChange={handleOnchange}
                            placeholder=''
                        />
                    </div>
                    <Form.Label className="search-group-label">
                        ชั้นปี :
                    </Form.Label>
                    <div className="search-group-form">
                        <Form.Control
                            name="years"
                            type="text"
                            value={formData.userinfo.years}
                            onChange={handleOnchange}
                            placeholder=''
                        />
                    </div>
                    <Form.Label className="search-group-label">
                        เบอร์โทรศัพท์ :
                    </Form.Label>
                    <div className="search-group-form">
                        <Form.Control
                            name="telno"
                            type="text"
                            value={formData.userinfo.telno}
                            onChange={handleOnchange}
                            placeholder=''
                        />
                    </div>
                    <div className="search-group-btn">
                        <Button variant="primary" type="Submit" >Submit</Button>
                    </div>
                </div>

            </Form>
        </div>
    )
}
