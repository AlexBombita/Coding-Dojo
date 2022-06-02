import React, {Component} from "react"

class Display extends Component{
    render(){
        return (
            <fieldset>
                <legend>Display.jsx</legend>
            <h1>Hello Dojo!</h1>
            <h3>Things I need to do:</h3>
            <ul>*Learn React</ul>
            <ul>*Climb Mt. Everest</ul>
            <ul>*Run a marathon</ul>
            <ul>*Feed the dogs</ul>
            </fieldset>
        )
    }
}

export default Display;