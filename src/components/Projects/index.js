import React, { useState } from "react";
import Repo from "../Repo";

function Projects(){
    const [projects] = useState([
        {
            name:'deep-thoughts',
            repo:'https://github.com/Yasir19/deep-thoughts',
            url:'https://github.com/Yasir19/deep-thoughts',
            desc:'MERN STACK',
        },
        {
            name:'action-house',
            repo:'https://github.com/Yasir19/auction-house',
            url:'https://github.com/Yasir19/auction-house',
            desc:'MVC full stack Ecommerce',
        },
        {
            name:'password-generator',
            repo:'https://github.com/Yasir19/password-generator',
            url:'https://github.com/Yasir19/password-generator',
            desc:'JavaScript',
        },
        {
            name:'weather-dashboard',
            repo:'https://github.com/Yasir19/weather-dashboard',
            url:'https://github.com/Yasir19/weather-dashboard',
            desc:'JavaScript/CSS',
        },
    ])
    return(
        <div>
            <div className="flex-row">
                {projects.map((project, index)=>(
                    <Repo
                    project={project}
                    key={"project" + index}
                    />
                ))}
            </div>
        </div>
    )
}
export default Projects