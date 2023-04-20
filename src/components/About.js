import React from 'react';
import "./Layout.css";
function About(props) {
    return (
        <div className='outerContainer'>
            <div className='innerContainer'>
                <h1 className='title'>About Me</h1>
                <div className='contentWrapper'>
                    <span>{props.data.About.Present}</span>
                </div>
                <br></br>
                <br></br>
                <h1 className='title'>Hobby</h1>
                <div className='contentWrapper'>
                    <p>{props.data.About.Hobby}</p>
                </div>
            </div>
        </div>
    );
}

export default About;