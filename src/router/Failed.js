import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import failedIcon from '../res/failedIcon.png'
import { Button } from 'react-bootstrap'
import "./Failed.scss"
export default function Failed(props) {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery()
    const num = query.get("num")
    const eventId = query.get("eventid")
    const backRef = '/event/?eventid=' + eventId + '&type=checkin'
    const registerRef = '/event/?eventid=' + eventId + '&type=register'
    ///handle register failed (duplicate telno)
    return (
        <div>
            <div>
                <img width='200px' src={failedIcon} />
                {(props.failedType === "alreadyCheckedIn") ?
                    <div>ดำเนินการไม่สำเร็จหมายเลขโทรศัพท์ {num} <br /> ได้ถูกลงทะเบียนไปแล้ว</div>
                    :
                    <div>ไม่พบการลงทะเบียนหมายเลขโทรศัพท์ {num} <br />โปรดตรวจสอบหมายเลขของท่าน หรือทำการลงทะเบียนใหม่</div>
                }

                <div className="failed-group-btn-div" >
                    <Button className="failed-group-btn" variant="primary" type="Submit" >
                        <a href={backRef}>Back</a>
                    </Button>
                    <Button className="failed-group-btn" variant="primary" type="Submit" >
                        <a href={registerRef}>Register</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
