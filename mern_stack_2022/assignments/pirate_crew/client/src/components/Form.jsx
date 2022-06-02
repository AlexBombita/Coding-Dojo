import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {

    const navigate = useNavigate()
    // DECLARE STATE
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [chest, setChest] = useState(0)
    const [phrase, setPhrase] = useState("")
    const [position, setPosition] = useState("")
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)


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
            name,
            photo,
            chest,
            phrase,
            position,
            pegLeg,
            eyePatch,
            hookHand
        }
        console.log(productObj)

        // MAKE POST REQUEST TO EXPRESS WITH bookObj
        axios.post("http://localhost:8000/api/products/new", productObj)
        
            .then(res => {
                navigate("/")
                refresh()
                setName("")
                setPhoto("")
                setChest(0)
                setPhrase("")
                setPosition("")
                setPegLeg(true)
                setEyePatch(true)
                setHookHand(true)
            })
            .catch(err => {
                console.log("ERROR FROM BACK-END:", err)

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
            // navigate("/")
    }


    return (
        <fieldset>
            <legend>FormComponent.jsx</legend>
            <form onSubmit={createHandler}>
                <p>
                    Pirate Name:
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                    {errorObj.name ? <p>{errorObj.name}</p> : null }
                </p>
                <p>
                    Image URL:
                    <input type="text" name="photo" onChange={(e) => setPhoto(e.target.value)} value={photo} />
                    {errorObj.photo ? <p>{errorObj.photo}</p> : null }
                </p>
                <p>
                    # of Chests:
                    <input type="number" name="chest" onChange={(e) => setChest(e.target.value)} value={chest} />
                    {errorObj.chest ? <p>{errorObj.chest}</p> : null }
                </p>
                <p>
                    Pirate Catch Phrase:
                    <input type="text" name="phrase" onChange={(e) => setPhrase(e.target.value)} value={phrase} />
                    {errorObj.phrase ? <p>{errorObj.phrase}</p> : null }
                </p>
                {/* <p>
                    Crew Position:
                    <input type="text" name="position" onChange={(e) => setPosition(e.target.value)} value={position} />
                    {errorObj.position ? <p>{errorObj.position}</p> : null }
                </p> */}
                <p>
                    Crew Position:
                    <select name="position" value={position}
                        onChange={e => setPosition(e.target.value)}>
                        <option hidden>Choose a Position</option>
                        <option value="captain">Captain</option>
                        <option value="quarter master">Quarter Master</option>
                        <option value="boatswain">Boatswain</option>
                        <option value="powder monkey">Powder Monkey</option>
                    </select>
                </p>    
                    <input type="checkbox" onClick={(e) => setPegLeg(e.target.checked)} name="pegLeg" checked={pegLeg}/>
                    <label>Peg Leg</label>
                    <input type="checkbox" onClick={(e) => setEyePatch(e.target.checked)} name="eyePatch" checked={eyePatch}/>
                    <label>Eye Patch</label>
                    <input type="checkbox" onClick={(e) => setHookHand(e.target.checked)} name="hookHand" checked={hookHand}/>
                    <label>Hook Hand</label>
                <button>Add Pirate</button>
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