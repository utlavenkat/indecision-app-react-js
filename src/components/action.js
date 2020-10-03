import React from 'react'

class Action extends React.Component {
    handlePick() {
        alert('handle pick')
    }
    render() {
        return (
            <div>
                <button className="big-button"
                disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should i do?</button>
            </div>
        )
    }
}

export default Action