import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008 - present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Engineering and computational mecahnics"
            subTitle="NIT JAMSHEDPUR(2023 - 2027)"
            result="CGPA:7.69"
            des="The training provided by college in order to prepare for work in various sectors of the economy or areas of culture through upgrading skills."
          />
          <ResumeCard
            title="AS - Science (NON-MEDICAL)"
            subTitle="BS INTER COLLEGE JAC (2020 - 2022)"
            result="Percentage:91.4%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="HERITAGE INTERNATIONAL SCHOOL (2008- 2020)"
            result="Percentage:93.4%"
            des="Secondary education or post-primary education covers important phases on learnings and growth."
          />
        </div>
      </div>
     
      
    
    </motion.div>
  );
}

export default Education