import React from 'react';
import "./Layout.css";
import $ from "jquery";
function Skill(props) {
    if($(window).width() < 600){
        $('.topbar-content').slideUp(300, function(){
        }).fadeOut({
            duration: 300,
            queue: false
        });
    }

    var data = props.data;
    const displayFlex = {
        display:'flex',
        paddingTop: '2rem',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        background: 'blueviolet',
        paddingBottom: '5rem'
    };

    const skillsStyle ={
        width: '80%',
        background: "rebeccapurple",
        margin: '10px',
        borderRadius: '10px',
        color: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    };

    const skillIconStyle = {
        width: '120px',
        height: '100px',
        padding: '20px',
        background: 'gold',
        color: '#000',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: '10px',
        borderBottom: '1px solid maroon',
        margin: '10px',
    };

    const imageStyle = {
        width: '60%',
        height: '60%',
        borderRadius: '10%'
    };

    return ( 
        <div style={displayFlex}>
            <h1 className='title'>Skills & Abilities</h1>
            <div style={skillsStyle}>
                    {
                        data.Skills.map(skill => (
                            <div style={skillIconStyle} className='skillContainer'>
                                <span style={{padding: '8px', fontFamily: 'New Times Romans', fontWeight: 'bold'}}>{skill.Name}</span>
                                <img src={skill.Icon} style={imageStyle}></img>
                            </div>
                        ))
                    }
            </div>
        </div>
     );
}

export default Skill;