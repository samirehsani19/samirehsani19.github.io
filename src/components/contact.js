import React from 'react';
import "./Layout.css";
import $ from "jquery";
function Contact(props) {
    if($(window).width() < 600){
        $('.topbar-content').slideUp(300, function(){
        }).fadeOut({
            duration: 300,
            queue: false
        });
    }
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