import React, { useState } from "react";
const Forms = () => {

    const myCSSForms = {
        border: "1px solid",
        width: "20%",
        margin: "auto",
        textAlign: 'left'
    };

    const myCSSLabel = {
        minWidth: "300px"

    }

    const myCSSErrorMessage = {
        color: "red"
    }

    const [EmailValud, SetEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [validPass, setValidPass] = useState(false)
    const [passtext, setPasstext] = useState('')

    const onChangeEvent = (e) => {
        let totalLength = e.target.value
        SetEmail(e.target.value)
        if (EmailValud.length < 3) {
            console.log(EmailValud)
            setErrorMessage('Data should be more than3 character')
        } else {
            setErrorMessage('')
        }
    }

    const onChangeEventPassword = (e) => {
        let totalLength = e.target.value
        setPasstext(e.target.value)
        console.log(passtext)
        if (passtext.length < 3) {
            setValidPass(true)
        } else {
            setValidPass(false)
        }
    }

    const subMitForm = (e) => {
        e.preventDefault()
        if (validPass) {
            alert('invalid password')
        } else {
            alert('sucess')
        }
    }

    return (
        <form style={myCSSForms} onSubmit={subMitForm}>
            <label htmlFor="Somethong" style={myCSSLabel}> Email </label>
            <input type="text" onChange={onChangeEvent} /> <br />
            <label htmlFor="" style={myCSSErrorMessage}>{errorMessage} </label><br />
            <label htmlFor="Somethong">Password </label>
            <input type="password" onChange={onChangeEventPassword} />
            {validPass ? <span style={myCSSErrorMessage}> Password not valid </span> : ""}
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Forms //exporting it as default