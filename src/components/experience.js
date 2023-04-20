import React from 'react';
function Experience(props) {
    // const containerStyle = {
    //     position: 'absolute',
    //     width: '100%',
    //     height: '100%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     background: 'blueviolet',
    // };

    // const contentStyle ={
    //     width: '80%',
    //     borderRadius: '8px',
    //     margin: '10px',
    //     padding: '10px',
    //     boxShadow: '0px 3px 6px -4px',
    //     background: "rebeccapurple",
    //     color: 'white',
    //     fontFamily: 'New Times Romans',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center'
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
    //     marginBottom: '3rem',
    //     padding: '0px 14px',
    //     width: '70%'
    // };

    // const itemStyle = {
    //     width: '100%',
    //     height: '40px',
    //     display: 'flex',
    //     alignItems: 'center',
    //     textTransform: 'uppercase',
    //     padding: '0px 14px',
    // }

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