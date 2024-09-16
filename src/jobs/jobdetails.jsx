import React from "react";
import { Link } from "react-router-dom";






const Jobdetails = () => {
    

    return (
        <div>
            <div>
                <Link to="./">Home</Link>
                <Link to="./joblist">Job Lists</Link>
                <Link to="./pages">Pages</Link>
                <Link to="./resume">Resume</Link>
            </div>

            <div>
                <h1>Job Details Page</h1>
            </div>

        </div>
    );
};




export default Jobdetails;