import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"



const EditForm = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [chest, setChest] = useState(0)
    const [phrase, setPhrase] = useState("")

    // STATE FOR BACK-END VALIDATIONS MESSAGES
    const [err, setErr] = useState([])

    // GET PATH VARIABLE FROM REACT ROUTER
    const {product_id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + product_id)
            .then(res => {
                const {name, chest, phrase} = res.data
                setName(name)
                setChest(chest)
                setPhrase(phrase)
            })
            .catch(err =>{

            })
    },[])

    const updateHandler = (event) =>{
        event.preventDefault()
        // CREATE AN OBJECT WITH THE BOOK INFO
        const productObj = {
            name,
            chest,
            phrase
        }
        // MAKE PUT REQUEST TO EXPRESS WITH bookObj
        axios.put("http://localhost:8000/api/products/"+product_id, productObj)
            .then(res => navigate('/') )
            .catch(err => {
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
            <legend>EditForm.jsx</legend>
            <form onSubmit={updateHandler}>
                <p>
                    Pirate Name:
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    # of Chests:
                    <input type="number" name="chest" onChange={(e) => setChest(e.target.value)} value={chest} />
                </p>
                <p>
                    Pirate Catch Phrase:
                    <input type="text" name="phrase" onChange={(e) => setPhrase(e.target.value)} value={phrase} />
                </p>
                <button>Update</button>
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

export default EditForm