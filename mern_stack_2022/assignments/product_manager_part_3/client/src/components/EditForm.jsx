import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"



const EditForm = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    // STATE FOR BACK-END VALIDATIONS MESSAGES
    const [err, setErr] = useState([])

    // GET PATH VARIABLE FROM REACT ROUTER
    const {product_id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + product_id)
            .then(res => {
                const {title, price, description} = res.data
                setTitle(title)
                setPrice(price)
                setDescription(description)
            })
            .catch(err =>{

            })
    },[])

    const updateHandler = (event) =>{
        event.preventDefault()
        // CREATE AN OBJECT WITH THE BOOK INFO
        const productObj = {
            title,
            price,
            description
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
                    Title:
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    Price:
                    <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    Description:
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
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