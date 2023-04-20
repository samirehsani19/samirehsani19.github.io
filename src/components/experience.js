import React from 'react';
import $ from "jquery";
function Experience(props) {
    $('.topbar-content').fadeOut(500);

    return (
        <div className='outerContainer'>
            <div className='innerContainer'>
                <h1 className='title'>Experience</h1>
                <div className='contentWrapper'>
                    <div className='itemContainer'>
                        <span style={{marginRight: '20px'}}>Date:</span>
                        <span>
                            <span style={{marginRight: '10px'}}>
                                {props.data.Experience.Date}
                            </span>
                        </span>
                    </div>
                    <div className='itemContainer'>
                        <span style={{marginRight: '20px'}}>Title:</span>
                        <span>
                            {props.data.Experience.Title}
                        </span>
                    </div>
                    <div className='itemContainer'>
                        <span style={{marginRight: '20px'}}>Company:</span>
                        <span>
                            {props.data.Experience.Company}
                        </span>
                    </div>
                    <hr/>
                    <div className='descriptionContainer'>
                        <span>
                            {props.data.Experience.Description}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;