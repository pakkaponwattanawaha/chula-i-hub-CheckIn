import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

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
    const tel = ""
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            "userinfo": {
                ...prevState.userinfo,
                [name]: value
            }
        }))
        // console.log(e.target.name)
        // console.log(e.target.value)

    }
    const handleSubmit = () => {
        console.log('SUBMITTED!')
    }
    console.log('formData:', formData)
    return (
        <div>
            <h1>REGISTER</h1>
            <div>Design thinking</div>
            <div>{JSON.toString(formData.userinfo)}</div>

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
                            placeholder='โปรดกรอกชื่อภาษาไทย'
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
                            placeholder='โปรดกรอกนามสกุลภาษาไทย'
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
                            placeholder='โปรดกรอกรหัสนิสิต10หลัก'
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
                            placeholder='โปรดกรอกคณะที่ศึกษาอยู่'
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
                            placeholder='โปรดกรอกชั้นปีที่ศึกษาอยู่'
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
                            placeholder='0XX-XXX-XXXX'
                        />
                    </div>
                    <div className="search-group-btn">
                        <Button variant="primary" type="button" value="Submit" >Submit</Button>
                    </div>
                </div>

            </Form>
            {/* <Form placeholder='ชื่อ' />
            <Form placeholder='นามสกุล' />
            <Form placeholder='เบอร์โทรศัพท์' />
            <Form placeholder='รหัสนิสิต' />
            <Form placeholder='คณะ' />
            <Form placeholder='ชั้นปี' />
            <Form placeholder='เบอร์โทรศัพท์' />
            <Button title='Submit' from='register' /> */}
        </div>
    )
}
