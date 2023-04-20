import React from 'react';
import "./Layout.css";
import $ from "jquery";
function Education(props) {
    $('.topbar-content').fadeOut(500);

    return (
        <div className='outerContainer'>
            <div className='innerContainer'>
                <h1 className='title'>Education</h1>
                <div className='contentWrapper'>
                    <div className='itemContainer'>
                        <span style={{marginRight: '20px'}}>Date:</span>
                        <span>
                            <span style={{marginRight: '10px'}}>
                                {props.data.Education.Date}
                            </span>
                        </span>
                    </div>
                    <div className='itemContainer'>
                        <span style={{marginRight: '20px'}}>Title:</span>
                        <span>
                            {props.data.Education.Title}
                        </span>
                    </div>
                    <div className='itemContainer'>
                        <span style={{marginRight: '20px'}}>College:</span>
                        <span>
                            {props.data.Education.College}
                        </span>
                    </div>
                    <hr></hr>
                    <div className='descriptionContainer'>
                        <span>
                            {props.data.Education.Description}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;