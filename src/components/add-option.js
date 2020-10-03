import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleOnsubmit = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        e.target.elements.option.value=''
        const error = this.props.handleAddOption(option)
        this.setState(()=> ({error}))
    }
    render() {
        return (
            <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form onSubmit={this.handleOnsubmit} className="add-option">
                    <input className="add-option__input" type="text" name="option"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}