import React from 'react'

export default function Btn(props) {
    return (
        <div>
            <button onClick={() => { console.log('btn clicked from ' + props.from) }}>
                {props.title}
            </button>
        </div>
    )
}
