import React from "react";
import { Link } from "react-router-dom";






const Pages = () => {
    

    return (

        <div>
        <div>
        <div>
                <Link to="./">Home</Link>
                <Link to="./jobdetails">Job Details</Link>
                <Link to="./joblisi">Job Lists</Link>
                <Link to="./resume">Resume</Link>
            </div>
        </div>
        <div>
        <h1>Other Page</h1>
        </div>
    </div>
        
    );
};




export default Pages;