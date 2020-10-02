import React from 'react'
import Option from './option'

const Options =(props) => {
    return (
        <div>
            <p>Your Options are here.</p>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <Option options={props.options} handleDeleteOption={props.handleDeleteOption}/>
        </div>
    )
}

export default Options