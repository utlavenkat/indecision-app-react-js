import React from 'react'

const Option = (props) => {
    return (
        <div>
            <ol>
            {
                props.options.map((option) => <li key={option}>{option} <button onClick={(e)=> {
                    props.handleDeleteOption(option)
                }}>Delete</button></li> )
            }
            </ol>
        </div>
    )
}

export default Option