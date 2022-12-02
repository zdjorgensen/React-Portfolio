import React, { useState } from 'react';

const styles = {
    h1Style: {
        display: 'flex',
        padding: '100px',
        color: '#323031',
        fontSize: '35px'
    },
    formStyle: {
        paddingLeft: '100px',
    },
    messageTextStyle: {
        display: 'flex',
        height: '300px',
        width: '50%',
        resize: 'none',
        padding: '10px',
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: '14px'
    },
    buttonStyle: {
        color: '#adb5bd',
        backgroundColor: '#3D3B3C',
        display: 'flex',
        height: '40px',
        width: '90px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        borderRadius: '10px',
        cursor: 'pointer'
    }
};

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
        return alert("Form submitted");
    }

    const handleChange = (e) => {
        let emailRegex = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/
        const { name, value } = e.target;

        if(name === 'name' ) return setName(value);
        if(name === 'message' ) return setMessage(value);
        if(name === 'email') return setEmail(value);
        //Cannot get emailRegex.test(email) to work        
    };

    return (
        <div>
            <h1 style={styles.h1Style}> Contact </h1>
            <form style={styles.formStyle}>

                <label for="name"> Name: </label>
                <br></br>
                <input
                    value={name}
                    name="name"
                    type="text"
                    onChange={handleChange}
                    required>
                </input>
                <br></br>

                <label for="email"> Email: </label>
                <br></br>
                <input
                    value={email}
                    name="email"
                    type="text"
                    onChange={handleChange}
                    required >
                </input>
                <br></br>

                <label for="message"> Message: </label>
                <br></br>
                <textarea
                    type="text"
                    name="message"
                    onChange={handleChange}
                    style={styles.messageTextStyle}
                    value={message}
                    required >
                </textarea>

                <button
                    type="button"
                    style={styles.buttonStyle}
                    onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );

};

// Logic to get form to work is possibly activity 19 in the 22-State and then
// its the reducers