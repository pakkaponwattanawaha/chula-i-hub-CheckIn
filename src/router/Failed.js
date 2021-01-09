import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import failedIcon from '../res/failedIcon.png'
export default function Failed(props) {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery()
    const num = query.get("num")
    const eventId = query.get("eventid")
    const backRef = '/event/?eventid=' + eventId + '&type=checkin'
    const registerRef = '/event/?eventid=' + eventId + '&type=register'

    return (
        <div>
            <img width='200px' src={failedIcon} />
            {(props.failedType === "alreadyCheckedIn") ?
                <div>ดำเนินการไม่สำเร็จหมายเลขโทรศัพท์ {num} ได้ถูกลงทะเบียนไปแล้ว</div>
                :
                <div>ไม่พบการลงทะเบียนหมายเลขโทรศัพท์{num} โปรดตรวจสอบหมายเลขของท่าน หรือทำการลงทะเบียนใหม่</div>
            }
            <button><a href={backRef}>Back</a></button>
            <button><a href={registerRef}>Register</a></button>
        </div>
    )
}
