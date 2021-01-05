import React,{ useEffect, useState }  from 'react'
import { useHistory,useLocation } from "react-router-dom";
// import BasicForm from '../component/BasicForm'
// import Btn from '../component/Btn'
import { Form, Button } from 'react-bootstrap'
export default function Checkin() {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    
    const query = useQuery();
    
    const [input, setInput] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(input==='0865500107')history.push('/event/?eventid=0001&type=success' + '&num=' + input)
        else history.push('/event/?eventid=0001&type=failed' + '&num=' + input)
    }
    const handleClick = () =>{console.log(input)}
    
    const eventid = query.get("eventid")
    return (
        <div>
            <h1>Checkin</h1>
            <h2>Event: {eventid}</h2>            
            <Form onSubmit={handleSubmit}>
                <div className="search-group-div">
                    <Form.Label className="search-group-label">
                    โปรดระบุเบอร์โทรศัพท์ :
                    </Form.Label>
                    <div className="search-group-form">
                        <Form.Control
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder='0XX-XXX-XXXX'
                        />
                    </div>
                    <div className="search-group-btn">
                        <Button  variant="primary" type="submit" value="Submit" >Submit</Button>
                        <Button  variant="primary" type="button" value="Submit" onClick={handleClick} >print input</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}
