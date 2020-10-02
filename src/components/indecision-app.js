import React from 'react'
import AddOption from './add-option'
import Options from './options'
import Header from './header'
import Action from './action'

export default class IndecisionApp extends React.Component {
    state = {
        options :[]
    }
    
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }
    handleDeleteOption = (optionToRemove)  => {
        //console.log(optionToRemove)
        this.setState((prevState) => ({options: prevState.options.filter((option) => optionToRemove !== option)}))
        
    }
    handlePick= ()=> {
        const randomNumber = Math.floor(Math.random() * this.state.options.length)
        console.log(this.state.options[randomNumber])
    }
    handleAddOption = (option) => {
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