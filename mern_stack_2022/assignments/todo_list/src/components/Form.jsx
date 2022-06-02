import React, { useState } from 'react'

const Form = (props) => {
    // DESTRUCTURE addUser FROM PROPS
    const {addTask} = props

    // STATE FOR TASKNAME
    const [taskName, setTaskName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        // CREATE A USER OBJECT
        if (taskName.length === 0){
            return;
        }
        let obj = {
            taskName, complete : false
        }
        addTask(obj)
        setTaskName("")
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    <input onChange={event => setTaskName(event.target.value)} type="text" value={taskName} />
                </p>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default Form