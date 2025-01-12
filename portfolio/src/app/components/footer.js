import React from "react";
import "../styles/components.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="group-left">
        <span>
          <Image src="/icons/git-branch.svg" alt="git-branch" width={17} height={17}  />&nbsp;main*&nbsp; 
          <Image src="/icons/refresh-cw.svg" alt="refresh" width={17} height={17} />
        </span>
        <span>
          <Image src="/icons/circle-x.svg" alt="circle-x" width={17} height={17} />&nbsp;0
        </span>
        <span>
          <Image src="/icons/triangle-alert.svg" alt="triangle-alert" width={17} height={17} />&nbsp;0
        </span>
        <span>
          <Image src="/icons/radio-tower.svg" alt="radio-tower" width={17} height={17} />&nbsp;1
        </span>
      </div>

      <div className="group-right">
        <span>Spaces: 0</span>
        <span>UTF-8</span>
        <span>LF</span>
        <span>Next.js</span>
        <span>
          <Image src="/icons/check-check.svg" alt="check-check" width={17} height={17} />&nbsp;Prettier
        </span>
        <Image src="/icons/bell.svg" alt="bell" width={17} height={17} />
      </div>
    </footer>
  );
};

export default Footer;