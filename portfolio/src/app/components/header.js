import React from "react";
import "../styles/components.css"
import VisualStudioCode from "@/asset/visualstudio.svg"



const header = () =>
(
 <header>
    <VisualStudioCode/>
    <nav>
       <ul>
            <li>File</li>
            <li> Edit</li>
            <li>Selection</li>
            <li>View</li>
            <li>Go</li>
            <li>Run</li>
            <li>...</li>
        </ul> 
    </nav>
    <div className="group">
        <div className="dot red"></div>
        <div className="dot yellow"></div>
        <div className="dot green"></div>
    </div>
    
 </header>
);
export default header;