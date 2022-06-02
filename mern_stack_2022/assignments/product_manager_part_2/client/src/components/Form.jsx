import React, {useState} from 'react'
import axios from 'axios'

const Form = (props) => {
    // DECLARE STATE
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    // STATE FOR BACK-END VALIDATIONS MESSAGES
    const [err, setErr] = useState([])
    const [errorObj] = useState({})

    // DESTRUCTURE
    const {refresh} = props

    // HANDLER FUNCTIONS
    const createHandler = event => {
        event.preventDefault()
        // CREATE AN OBJECT WITH THE BOOK INFO
        const productObj = {
            title,
            price,
            description
        }
        // MAKE POST REQUEST TO EXPRESS WITH bookObj
        axios.post("http://localhost:8000/api/products/new", productObj)
            .then(res => {
                refresh()
                setTitle("")
                setPrice(0)
                setDescription("")
            })
            .catch(err => {
                console.log("ERROR FROM BACK-END:", err.response.data.errors)

                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                const errorObj = {}
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)

                    errorObj[key] = errorResponse[key].message
                }
                // setErrorObj(errorObj)
                console.log("ERROR OBJ: ", errorObj)
                setErr(errorArr)
            })
    }


    return (
        <fieldset>
            <legend>FormComponent.jsx</legend>
            <form onSubmit={createHandler}>
                <p>
                    Title:
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                    {errorObj.title ? <p>{errorObj.title}</p> : null }
                </p>
                <p>
                    Price:
                    <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} value={price} />
                    {errorObj.price ? <p>{errorObj.price}</p> : null }
                </p>
                <p>
                    Description:
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                    {errorObj.description ? <p>{errorObj.description}</p> : null }
                </p>
                <button>Create</button>
            </form>
            {
                err.map((errorMessage) => {
                    return(
                        <p>{errorMessage}</p>
                    )
                })
            }
        </fieldset>
    )
}

export default Form