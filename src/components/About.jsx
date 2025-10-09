import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon,link }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          <a href={`https://en.wikipedia.org/wiki/${link}`}target="_blank" rel="noopener noreferrer">          {title}</a>
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-thertiary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in many programing languges 
        <a href="https://learn.microsoft.com/en-us/dotnet/csharp/"  target="_blank" rel="noopener noreferrer" > C# </a>
         <a href="https://en.wikipedia.org/wiki/C++"  target="_blank" rel="noopener noreferrer" > C++ </a>
           <a href="https://en.wikipedia.org/wiki/JavaScript"  target="_blank" rel="noopener noreferrer" >js </a>
            <a href="https://en.wikipedia.org/wiki/TypeScript"  target="_blank" rel="noopener noreferrer"> ts </a>
             <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer" > css </a>
         <a href="https://en.wikipedia.org/wiki/HTML"  target="_blank" rel="noopener noreferrer"> html </a>
          and expertise in frameworks like  <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" > React </a>,
          <a href="https://dotnet.microsoft.com/en-us/apps/aspnet"  target="_blank" rel="noopener noreferrer"> ASP.Net Core </a>,and
         I'm a quick learner and collaborate closely with web Design Agencies and D2C to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
