"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 0.66)}
        className="relative w-full md:-mt-[20px]  -mt-[12px]"
      >
        <div className="absolute w-full sm:h-[400px] h-[300px] hero-gradient  z-[0] -top-[57px]" />
        <img
          src="/cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[250px] object-cover sm:rounded-[120px] rounded-[80px] -top-[30px] z-10 relative"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[100px] -mt-[70px] pr-[60px] relative z-10 " >
            <img src="/stamp.png" alt="stamp" className="sm:w-[135px] w-[90px] sm:h-[135px] h-[90px] object-contain" />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
