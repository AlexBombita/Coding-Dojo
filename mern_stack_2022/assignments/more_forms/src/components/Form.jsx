import React, {useState} from "react";

const Form = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")



        // STATE FOR KEEPING TRACK OF VALIDATIONS
        const [firstNameError, setFirstNameError] = useState("")
        const [lastNameError, setLastNameError] = useState("")
        const [emailError, setEmailError] = useState("")
        const [passwordError, setPasswordError] = useState("")
        const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const submitHandler = (event) => {

        event.preventDefault()
        console.log("REGISTERING:", firstName, lastName, email, password, confirmPassword)

        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    const firstNameHandler = (event) => {
        setFirstName(event.target.value)
        // FIRST NAME MUST BE REQUIRED
        if(event.target.value.length < 1){
            setFirstNameError("FIRST NAME MUST BE REQUIRED")
        }
        // FIRST NAME MUST BE LONGER THAN 2 CHARS
        else if(event.target.value.length < 2){
            setFirstNameError("FIRST NAME MUST BE LONGER THAN 2 CHARS")
        }
        // VALIDATIONS PASS, CLEAR OUT ERROR MESSAGES
        else{
            setFirstNameError("")
        }
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value)
        // LAST NAME MUST BE REQUIRED
        if(event.target.value.length < 1){
            setLastNameError("LAST NAME MUST BE REQUIRED")
        }
        // LAST NAME MUST BE LONGER THAN 2 CHARS
        else if(event.target.value.length < 2){
            setLastNameError("LAST NAME MUST BE LONGER THAN 2 CHARS")
        }
        // VALIDATIONS PASS, CLEAR OUT ERROR MESSAGES
        else{
            setLastNameError("")
        }
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
        // LAST NAME MUST BE REQUIRED
        if(event.target.value.length < 1){
            setEmailError("EMAIL MUST BE REQUIRED")
        }
        // LAST NAME MUST BE LONGER THAN 2 CHARS
        else if(event.target.value.length < 2){
            setEmailError("EMAIL MUST BE LONGER THAN 2 CHARS")
        }
        // VALIDATIONS PASS, CLEAR OUT ERROR MESSAGES
        else{
            setEmailError("")
        }
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
        // LAST NAME MUST BE REQUIRED
        if(event.target.value.length < 1){
            setPasswordError("PASSWORD MUST BE REQUIRED")
        }
        // LAST NAME MUST BE LONGER THAN 2 CHARS
        else if(event.target.value.length < 2){
            setPasswordError("PASSWORD MUST BE LONGER THAN 2 CHARS")
        }
        // VALIDATIONS PASS, CLEAR OUT ERROR MESSAGES
        else{
            setPasswordError("")
        }
    }

    const confirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value)
        // LAST NAME MUST BE REQUIRED
        if(event.target.value.length < 1){
            setConfirmPasswordError("PASSWORD MUST BE REQUIRED")
        }
        // LAST NAME MUST BE LONGER THAN 2 CHARS
        else if(event.target.value.length < 2){
            setConfirmPasswordError("PASSWORD MUST BE LONGER THAN 2 CHARS")
        }
        // PASSWORD MUST MATCH CONFIRM PASSWORD
        else if(event.target.value !== password) 
            {setConfirmPasswordError("Password must match");}
        // VALIDATIONS PASS, CLEAR OUT ERROR MESSAGES
        else (
            setConfirmPasswordError("")
            )
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    First Name:
                    <input 
                        onChange={firstNameHandler}
                        value={firstName}
                        type="text" 
                        name="firstName" 
                    />
                    {
                        firstNameError ? <p style={{color:'red'}}>{firstNameError}</p> : null
                    }
                </p>
                <p>
                    Last Name:
                    <input
                        onChange={lastNameHandler }
                        value={lastName} 
                        type="text" 
                        name="lastName" 
                    />
                    {
                        lastNameError ? <p style={{color:'red'}}>{lastNameError}</p> : null
                    }
                </p>
                <p>
                    Email:
                    <input
                        onChange={emailHandler }
                        value={email} 
                        type="text" 
                        name="email" 
                    />
                    {
                        emailError ? <p style={{color:'red'}}>{emailError}</p> : null
                    }
                </p>
                <p>
                    Password:
                    <input
                        onChange={passwordHandler }
                        value={password} 
                        type="text" 
                        name="password" 
                    />
                    {
                        passwordError ? <p style={{color:'red'}}>{passwordError}</p> : null
                    }
                </p>
                <p>
                    Confirm Password:
                    <input
                        onChange={confirmPasswordHandler }
                        value={confirmPassword} 
                        type="text" 
                        name="confirmPassword" 
                    />
                    {
                        confirmPasswordError ? <p style={{color:'red'}}>{confirmPasswordError}</p> : null
                    }
                </p>
                <button>Register</button>
            </form>
        </fieldset>
    )
}

export default Form