console.log('app.js is running')
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}
const onFormSubmit = (event) => {
    event.preventDefault()
    let optionValue = event.target.elements.option.value
    if(optionValue) {
        app.options.push(optionValue)
        event.target.elements.option.value=''
        renderPage()
    }
}

const onRemoveAll = () => {
    app.options =[]
    renderPage()
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length)
    console.log(app.options[randomNumber])
}

var appRoot = document.getElementById('app')

const renderPage = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length>0 ? 'Here are your options': 'No Options'}</p>
            <p>Options Count:{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template,appRoot)
}

renderPage()






