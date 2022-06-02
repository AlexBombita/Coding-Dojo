import React, {Component} from "react"

class Display extends Component{
    constructor (props){
        super(props)
        this.state = {
            age : this.props.age,
        }
    }
        
    clickHandler = () => {
        // console.log("I have been clicked")
        // console.log(this.state.clicked)
        let {age} = this.state
        this.setState({
            'age' : age+1
        })
        console.log(this.state)
    }
    render(){
        const {firstName, lastName, hairColor} = this.props
        return(
            <fieldset>
                <legend>Display.jsx</legend>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.clickHandler}>Birthday Button for {firstName} {lastName}</button>
            </fieldset>
        )
    }    
}


export default Display;