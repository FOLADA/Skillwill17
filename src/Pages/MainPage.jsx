import React from 'react';
import "./MainPage.css"
import { Link } from 'react-router-dom';
const MainPage = () => {
    return (
        <div className="container">
  <Link style={{marginRight:"10px", border:"1px solid gray", fontSize:"20px", color:"black", }} to={"/"} >Main</Link>
  <Link style={{border:"1px solid gray", fontSize:"20px", color:"black"}} to={"/about"}>About</Link>
            <h1 className="title">Harry Potter</h1>
            <img 
                src="data:image/jpeg;base64,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" 
                alt="Harry Potter" 
                className="harry-image" 
            />
        </div>
    );
};

export default MainPage;