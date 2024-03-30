import React from 'react'
import {motion} from 'framer-motion';

import {styles } from "../style"
import { ComputersCanvas } from './canvas';



const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div >
          <h1 className={`${styles.heroHeadText} text-white`}>Hello, I'm <span className='text-[#915eff]'>Enoc Andrade</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I'm a computer science student  <br className='sm:block hidden'/>with a solid foundation in various technologies, I'm eager to tackle new challenges and contribute to innovative projects.
          </p>
        </div>
      </div>
        <ComputersCanvas/>
    </section>
  )
}

export default Hero