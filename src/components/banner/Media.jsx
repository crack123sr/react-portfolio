import React from 'react'
import { FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiGithub, SiFigma } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
             <a href="https://www.instagram.com/z6n_priyanshu/"> <FaInstagram/></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.x.com/Priyans02424/"><FaXTwitter /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/priyanshu-bhardwaj-77508027b/">  <FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://react.dev/reference/react"> <FaReact /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.figma.com/files/team/1436025258915643712/all-projects?fuid=1436025257168848231"> <SiFigma /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://github.com/crack123sr"> <SiGithub /></a>
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media