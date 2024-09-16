import { Link } from "react-router-dom";
import React from "react";






const Resume = () => {
    

    return (
        <div>
        <div>
        <div>
                <Link to="./">Home</Link>
                <Link to="./jobdetails">Job Details</Link>
                <Link to="./joblisi">Job Lists</Link>
                <Link to="./pages">Pages</Link>
            </div>
        </div>
        <div>
        <h1>Your Resume Here</h1>
        </div>
    </div>


    );
};




export default Resume;