import React from "react";
import { Link } from "react-router-dom";




const Home = () => {
    

    return (
        <div>
                <div>
                    <Link to="./jobdetails">Job Details</Link>
                    <Link to="./joblist">Job Lists</Link>
                    <Link to="./pages">Pages</Link>
                    <Link to="./resume">Resume</Link>
                </div>
        
        <div>
            <h1>Home Page</h1>
        </div>

        </div>
    );
};




export default Home;