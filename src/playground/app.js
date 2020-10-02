class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)

        this.state = {
            options :[]
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }
    handleDeleteOption(optionToRemove) {
        //console.log(optionToRemove)
        this.setState((prevState) => ({options: prevState.options.filter((option) => optionToRemove !== option)}))
        
    }
    handlePick(){
        const randomNumber = Math.floor(Math.random() * this.state.options.length)
        console.log(this.state.options[randomNumber])
    }
    handleAddOption(option) {
        if(!option) {
            return 'Cannot add an empty Option'
        }
        if(this.state.options.indexOf(option)>=0) {
            return 'This Option already exists. Please add unique option'
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    render() {
        const title = 'Indecision'
        const subTitle = 'Put your life in the hands of a computer!!!'
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options handleDeleteOptions={this.handleDeleteOptions} options={this.state.options} handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }

    componentDidMount() {
        const options = localStorage.getItem('options')
        if(options) {
            this.setState(() => ({options: JSON.parse(options)}))
        }

    }

    componentDidUpdate(prevProps,prevState) {
        if(prevState.options.length !== this.state.options) {
            localStorage.setItem('options',JSON.stringify(this.state.options))
        }
    }

    componentWillUnmount() {
        console.log('Component will unmount')
    }

}
const Header = (props) => {
    
    return (
        <div>
            <h1>{props.title}</h1>
            <h2> {props.subTitle}</h2>
        </div>
    )
}

class Action extends React.Component {
    handlePick() {
        alert('handle pick')
    }
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should i do?</button>
            </div>
        )
    }
}

const Options =(props) => {
    return (
        <div>
            <p>Your Options are here.</p>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <Option options={props.options} handleDeleteOption={props.handleDeleteOption}/>
        </div>
    )
}


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


class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleOnsubmit = this.handleOnsubmit.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleOnsubmit(e) {
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

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))