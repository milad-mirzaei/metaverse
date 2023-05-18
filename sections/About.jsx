'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";

import { fadeIn,staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10 `} >
    <div className="gradient-02 z-0"/>
    <motion.div
    variants={staggerContainer}
    initia='hidden'
    whileInView='show'
    viewport={{once:false,amount:.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About Metaverseus' textStyles='text-center' />
      <motion.p
      variants={fadeIn('up','tween',.2,.7)}
      className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-gray-400 '
      >
        <span className="font-extrabold text-white" > Metaverse </span>
        is a new thing in the future,where you can 
        enjoy the virtual world by feeling like it's
        realy real, you can feel what you feel in
        this metaverse world, becausse this is realy
        the 
        <span className="font-extrabold text-white" > madness of the metaverse </span>
        of today, using only 
        <span className="font-extrabold text-white" > VR </span>
        devices you can easily explore the metaverse 
        world you want, turn your dreams into 
        reality. Let's 
        <span className="font-extrabold text-white" > explore </span>
        the madness of the metaverse by scrolling down
      </motion.p>
      <motion.img 
       variants={fadeIn('up','tween',.3,.7)}
       src='/arrow-down.svg'
       alt="arrow down"
       className="w-[18px] h-[28px] object-contain mt-[48px]"
      />
    </motion.div>
  </section>
);

export default About;
