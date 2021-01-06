import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import firebase from '../utils/firebase'
export default function Register() {
    const initFormData = {
        "userinfo": {
            "telno": "",
            "name": "",
            "surname": "",
            "sid": "",
            "faculty": "",
            "years": "",
        },

    }
    const [formData, setFormData] = useState(initFormData)
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            "userinfo": {
                ...prevState.userinfo,
                [name]: value
            }
        }))

    }
    const handleSubmit = () => {
        const infoRef = firebase.database().ref("user")
        infoRef.push(formData)
        console.log('SUBMITTED!')
    }
    console.log('formData:', formData)
    return (
        <div>
            <h1>REGISTER</h1>
            <div>Design thinking</div>
            {/* <div>{JSON.toString(formData.userinfo)}</div> */}

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
                        <Button variant="primary" type="button" value="Submit" onClick={handleSubmit}>Submit</Button>
                    </div>
                </div>

            </Form>
        </div>
    )
}
