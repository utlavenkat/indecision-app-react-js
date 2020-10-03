import React from 'react'

const Option = (props) => (
        <div>
            {
                props.options.map((option) => <div className="option"><p className="option__text">{option}</p> <button className="button button--link" onClick={(e)=> {
                    props.handleDeleteOption(option)
                }}>Remove</button></div> )
            }
        </div>
    )


export default Option