import React, { useState } from 'react';
import { send } from 'emailjs-com';

const styles = {
    h1Style: {
        display: 'flex',
        padding: '100px',
        color: '#323031',
        fontSize: '35px'
    },
    h2Style: {
        diplay: 'flex',
        paddingLeft: '100px',
        paddingBottom: '25px',
        color: '#323031',
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

    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            'service_qsabnla',
            'template_uch54i9',
            toSend,
            'jjQVAAmfYMd70t-9e'
        ).then((response) => {
            console.log('E-mail was sent!', response.status);
        }).catch((err) => {
            console.log('E-mail was not sent!', err);
        })
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1 style={styles.h1Style}> Contact </h1>
            <h2 style={styles.h2Style}> Send me an E-Mail! </h2>
            <form style={styles.formStyle} onSubmit={handleSubmit}>

                <label for="name"> Name / Company Name: </label>
                <br></br>
                <input
                    value={toSend.name}
                    name="name"
                    type="text"
                    onChange={handleChange}
                    required>
                </input>
                <br></br>

                <label for="email"> E-Mail: </label>
                <br></br>
                <input
                    value={toSend.email}
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
                    value={toSend.message}
                    required >
                </textarea>

                <button
                    type="submit"
                    style={styles.buttonStyle}
                >
                    Submit
                </button>

            </form>
        </div>
    );

};