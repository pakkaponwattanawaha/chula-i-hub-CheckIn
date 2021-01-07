import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import successIcon from '../res/successIcon.png'
export default function Success() {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const current = new Date();
    const query = useQuery()
    const num = query.get("num")
    const eventId = query.get("eventid")
    console.log(current.toString())
    console.log(current.time)
    return (
        <div>
            <img width='200px' src={successIcon} />
            {/* <div>{current.toString()}</div>
            <div>{num}</div> */}
            <div>ทำการลงทะเบียนหมายเลข {num} แล้ว</div>
            <div>วันที่ {current.getDate()}/{current.getMonth() + 1}/{current.getFullYear()} เวลา {current.toLocaleTimeString().replace("/.*(\d{2}:\d{2}:\d{2}).*/", "$1")}</div>
            <div>งาน {eventId}</div>
        </div>
    )
}
