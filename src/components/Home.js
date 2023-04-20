import React from "react";
import background from "./data/backgroundImg.jpg";
import './Layout.css';
import $ from "jquery";
function Home(props){
    $('.topbar-content').fadeOut(500);

    const containerStyle = {
        backgroundImage:`url(${background})`,
         width:'100%', position:'absolute', height:'100%', backgroundPosition:'center', 
         backgroundRepeat:'no-repeat', backgroundSize:'cover',
         filter: 'bluR(4px)',
    };

    const contentStyle = {
        position:'relative', top:'350px', left:'50%', 
        transform:'translate(-50%,-50%)', width:'100%', 
        alignItems:'center', display:'flex', justifyContent:'space-around',
        color:'white',
        backgroundColor: 'rgb(0,0,0, 0.4)',
        width: '60%',
        fontFamily: 'Arial, Helvetica, sans-serif',
        borderRadius: '8px',
        padding: '3rem 10px'
    };

    const titleStyle = {
        textTransform: 'uppercase',
        fontSize: '1rem',
        margin: '0px',
        fontWeight: '900px',
        background: 'linear-gradient(180deg, aqua 40%, yellow 80%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return(
        <div>
            <div style={containerStyle}></div>
            <div style={contentStyle} className="homeContent">
                <div style={titleStyle}>
                    <h1>Hi There,</h1>
                    <h1>I'm Samir Ehsani</h1>
                    <h3>And I'm A .Net Developer</h3>
                    <h4 style={{letterSpacing: '3px'}}>{props.data.Profile}</h4>
                </div>
                <div>
                    <img src={props.data.Image} style={{width:'60%', border:'1px solid maroon', borderRadius:'50%'}}></img>
                </div>
            </div>
        </div>
    )
}

export default Home;