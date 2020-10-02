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
                <form onSubmit={this.handleOnsubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type="text" name="option"></input>
                    <button >Add Option</button>
                </form>
            </div>
        )
    }
}