import React from "react";
import { Link } from "react-router-dom";







const Joblist = () => {
    

    return (

        <div>
        <div>
        <div>
                <Link to="./">Home</Link>
                <Link to="./jobdetails">Job Details</Link>
                <Link to="./pages">Pages</Link>
                <Link to="./resume">Resume</Link>
            </div>
        </div>
        <div>
        <h1>Job list Page</h1>
        </div>
    </div>
        
    );
};




export default Joblist;