import React from "react";
import "../styles/components.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="group-left">
        
        <span>
          <span className="lucide-git-branch"/> main* 
          <span className="lucide-refresh-cw"/>
        </span>
        <span><span className="lucide-circle-x"/> 0</span>
        <span><span className="lucide-triangle-alert"/> 0</span>

        <span><span className="lucide-radio-tower"/> 1</span>
      </div>

      <div className="group-right">
        <span>Spaces: 0</span>
        <span>UTF-8</span>
        <span>LF</span>
        <span>Next.js</span>
        <span> <span className="lucide-check-check"/> Prettier</span>
        <span className="lucide-bell"/>
      </div>
    </footer>
  );
};

export default Footer;
