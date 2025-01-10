import React from "react";
import "../styles/components.css"
import Image from "next/image";



const header = () =>
(
 <header>
    <Image src='/icons/visualstudio.svg' alt='visual studio' width={17}
    height={17}/>
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