import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Aspiring Coder.", "Frontend Developer.", "UI/UX Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 20,
      delaySpeed: 3000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Creative Vision, Artistic Precision</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi,I'm <span className="text-designColor capitalize">Priyanshu Bhardwaj</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="^_^"
            cursorColor="#ff04f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am an intermediate year student at National institute of technology Jamshedpur.
          I am currently pursueing engineering and computational mechanics.I aspire to explore
          knowledge about designing,development through software skills.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner