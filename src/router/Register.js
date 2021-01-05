import React from 'react'
import BasicForm from '../component/BasicForm'
import Btn from '../component/Btn'

export default function Register() {
    return (
        <div>
            <h1>REGISTER</h1>
            <div>Design thinking</div>
            <BasicForm placeholder='ชื่อ' />
            <BasicForm placeholder='นามสกุล' />
            <BasicForm placeholder='เบอร์โทรศัพท์' />
            <BasicForm placeholder='รหัสนิสิต' />
            <BasicForm placeholder='คณะ' />
            <BasicForm placeholder='ชั้นปี' />
            <BasicForm placeholder='เบอร์โทรศัพท์' />
            <Btn title='Submit' from='register'/>
        </div>
    )
}
