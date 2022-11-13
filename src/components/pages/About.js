import React from 'react';

const style = {
    h1Style: {
        display: 'flex',
        padding: '100px',
        color: '#323031',
        fontSize: '35px'
    },
    pStyle: {
        display: 'flex',
        fontSize: '18px',
        padding: '50px',
        margin: '30px',
    },
    imgStyle: {
        position: 'relative',
        left: '50px',
        bottom: '50px',
        borderColor: '#5F5B6B',
        borderWidth: '5px',
        borderStyle: 'solid',
    }
    
};

export default function About() {
    return (
        <div> 
            <h1 style={style.h1Style}> About </h1>
            <img style={style.imgStyle} src={require("../../img/recent-photo.jpg")} alt="Recent of me" />
            <p style={style.pStyle}> Hello! My name is Zachry Jorgensen and I am from Sioux Falls, SD. After graduating from the University of South Dakota, I moved to Salt Lake City where I got a job at the Salt Lake County Recorder's Office where I have worked for the past year. At the Recorder's Office, I help people with information about their properties and answer any questions they may have regarding previous documents recorded on their properties going back to around the 1850's. After work, I study web devlopment though the University of Utah's bootcamp which finsihes Nov, 29th, 2022! Once the bootcamp is over, I hope to find a job as a full stack web developer and use the experience of creating full stack applications and websites to eventually gather the knowlege and knowhow to either create my own video game or work for a video game company. </p>
        </div>
    )
};