import React from 'react'
import firebase from '../utils/firebase'
import { Form, Button } from 'react-bootstrap'
export default function EventCreater() {
    const initEvent = {
        "eid": "",
        "name": "",
        "description": "",
        "startDateTime": "",
        "endDateTime": "",
    },


    const [event, setEvent] = useState(initEvent)
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setEvent((prevState) => ({
            ...prevState.userinfo,
            [name]: value,
        }))
    }

    const handleSubmit = () => {
        const numRef = firebase.database().ref("event")
        numRef.push(event)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <div className="search-group-div">
                    <Form.Label className="search-group-label">
                        ชื่อ :
                    </Form.Label>
                    <div className="search-group-form">
                        <Form.Control
                            name="name"
                            type="text"
                            value={event.description}
                            onChange={handleOnchange}
                            placeholder=''
                        />
                    </div>
                    <Form.Label className="search-group-label">
                        eid :
                    </Form.Label>
                    <div className="search-group-form">
                        <Form.Control
                            name="surname"
                            type="text"
                            value={event.eid}
                            onChange={handleOnchange}
                            placeholder=''
                        />
                    </div>

                    <Form.Label className="search-group-label">
                        description :
                    </Form.Label>
                    <div className="search-group-form">
                        <Form.Control
                            name="sid"
                            type="text"
                            value={event.description}
                            onChange={handleOnchange}
                            placeholder=''
                        />
                    </div>
                    <Form.Label className="search-group-label">
                        startDateTime :
                    </Form.Label>
                    <div className="search-group-form">
                        <Form.Control
                            name="faculty"
                            type="text"
                            value={event.startDateTime}
                            onChange={handleOnchange}
                            placeholder=''
                        />
                    </div>
                    <Form.Label className="search-group-label">
                        endDateTime :
                    </Form.Label>
                    <div className="search-group-form">
                        <Form.Control
                            name="years"
                            type="text"
                            value={event.endDateTime}
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
