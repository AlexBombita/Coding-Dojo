import React, {useState} from 'react'

const Display = (props) => {
    // DESTRUCTURE users FROM PROPS
    const { task:taskList, removeTask, setTask} = props
    // const [complete, setComplete] = useState(false)

    const deleteHandler = (e, index) => {
        removeTask(index)
    }

    const checkboxHandler = (chk, ind) => {
        const newTaskList = [...taskList]
        newTaskList[ind].complete = chk
        setTask(newTaskList)
    }
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            <ul>

                {
                    taskList.map((task, index) =>{
                        const {taskName, complete} = task
                        return(
                            <li>
                                {complete ? <s> {taskName} </s> : taskName}
                                <input onChange={event => checkboxHandler(event.target.checked, index)} type="checkbox" checked={complete}/>
                                <button onClick={(e) => deleteHandler(e, index)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </fieldset>
    )
}

export default Display