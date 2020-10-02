class BuildToggleApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            isVisible: true
        }
    }
    handleToggle() {
        this.setState((previousState)=> {
            return {
                isVisible: !previousState.isVisible
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Toggle Visibility</h1>
                <button onClick={this.handleToggle}>{this.state.isVisible ? 'Hide Details':'Show Details'}</button>
                {this.state.isVisible && <p>There are some details for you to see</p>}
            </div>
        )
    }
}

ReactDOM.render(<BuildToggleApp/>,document.getElementById('app'))