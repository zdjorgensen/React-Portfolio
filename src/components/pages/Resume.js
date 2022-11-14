import React from 'react';

const styles = {
    h1Style: {
        display: 'flex',
        padding: '100px',
        color: '#323031',
        fontSize: '35px'
    },
    h2Style: {
        display: 'flex',
        padding: '100px',
        color: '#323031',
        fontSize: '25px'
    },
    aStyle: {
        paddingLeft: '100px',
        marginTop: '-60px',
        marginBottom: '-60px',
    },
    ulStyle: {
        color: '#323031',
        listStyle: 'circle',
        paddingLeft: '160px',
        marginTop: '-60px',
        marginBottom: '-60px',
    }
};

export default function Resume() {
    return (
        <div>
            <h1 style={styles.h1Style}> Resume </h1>
            <a href={require("../../img/Resume.pdf")} download style={styles.aStyle}>
                <p> Download my resume </p>
            </a>
            <h2 style={styles.h2Style}> Front-end Proficiencies </h2>
            <ul style={styles.ulStyle}>
                <li> HTML </li>
                <li> CSS </li>
                <li> JavaScript </li>
                <li> React </li>
                <li> Bootstrap </li>
            </ul>
            <h2 style={styles.h2Style}> Back-end Proficiencies </h2>
            <ul style={styles.ulStyle}>
                <li> Node </li>
                <li> Express </li>
                <li> MySQL </li>
                <li> Mongoose </li>
                <li> GraphSQL </li>
            </ul>


        </div>
    )
};