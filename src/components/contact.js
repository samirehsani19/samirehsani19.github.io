import React from 'react';
import "./Layout.css";
function Contact(props) {
    // const containerStyle = {
    //     width: '100%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     background: 'blueviolet',
    //     position: 'absolute',
    //     height: '100%'
    // };

    // const contentStyle ={
    //     width: '80%',
    //     borderRadius: '8px',
    //     margin: '10px',
    //     boxShadow: '0px 3px 6px -4px',
    //     background: "rebeccapurple",
    //     color: 'white',
    //     fontFamily: 'New Times Romans',
    //     display: 'flex',
    //     padding: '20px',
    // };

    // const titleStyle = {
    //     color: '#fff',
    //     textTransform: 'uppercase',
    //     fontSize: '4rem',
    //     margin: '0px',
    //     fontWeight: '900px',
    //     background: 'linear-gradient(to bottom, #cfc19f 24%, #534f2c 26%, #cfc19f 28%, #cfc19f 9%, #ffecb4 50%, #3a2c1f 75% )',
    //     WebkitBackgroundClip: 'text',
    //     WebkitTextFillColor: 'transparent',
    //     borderBottom: '1px solid',
    //     borderRadius: '10px',
    //     marginBottom: '1rem',
    //     width: '100%',
    //     padding: '14px'
    // };

    const contactStyle = {
        height: '40px',
        width: '80%',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase',
        borderBottom: '1px solid',
        padding: '0px 14px',
        marginBottom: '20px',
        flexWrap: 'wrap',
        justifyContent: 'start'
    }

    return (
        <div className='outerContainer'>
            <div className='innerContainer'>
                <h1 className='title' style={{width: '90%'}}>Contact</h1>
                <div style={contactStyle}>
                    <span style={{marginRight: '20px'}}>Name:</span>
                    <span>
                        <span style={{marginRight: '10px'}}>
                            {props.data.Contact.FirstName}
                        </span>
                        <span>
                            {props.data.Contact.LastName}
                        </span>
                    </span>
                </div>
                <div style={contactStyle}>
                    <span style={{marginRight: '20px'}}>Phone:</span>
                    <span>
                        {props.data.Contact.Phone}
                    </span>
                </div>
                <div style={contactStyle}>
                    <span style={{marginRight: '20px'}}>Email:</span>
                    <span>
                        {props.data.Contact.Email}
                    </span>
                </div>
                <div style={contactStyle}>
                    <span style={{marginRight: '20px'}}>Address:</span>
                    <span>
                        {props.data.Contact.Address}
                    </span>
                </div>
                <div style={contactStyle}>
                    <span style={{marginRight: '20px'}}>Suburb:</span>
                    <span>
                        {props.data.Contact.Suburb}
                    </span>
                </div>
                <div style={contactStyle}>
                    <span style={{marginRight: '20px'}}>State:</span>
                    <span>
                        {props.data.Contact.State}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Contact;