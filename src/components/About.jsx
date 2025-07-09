import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, imageVarient, textVariant, subHeading } from "../utils/motion";
import { ServiceCard } from "../components";
import { SectionWrapper } from "../hoc";
import { mypic } from "../assets";

const About = () => {
  return (
    <>
      <div className="relative w-full flex justify-center mt-[40px] my-28 ">
        <div className="w-[80%] h-[2px] bg-cyan-400 relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-cyan-600 rounded-full blur-[100px] opacity-45 z-[-1]"></div>
        </div>
      </div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>About Me</p>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className="">
        <p className={`${styles.sectionSubText} leading-normal`}>
          I am a Full Stack Web Developer specializing in the MERN stack. I
          build scalable web applications, optimize performance, and create
          seamless user experiences. Let’s build something amazing together!
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 gap-10">
        {/* Image Section */}
        <motion.div
          variants={imageVarient()}
          className="w-full flex flex-[35%] justify-center items-center  "
        >
          <img
            src={mypic}
            alt="Profile"
            className="rounded-full shadow-lg object-cover h-40 w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-80 lg:w-80 border-4 border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-400 hover:to-blue-500"
          />
        </motion.div>
        {/* Services Section */}
        <div className="flex flex-col gap-6 w-full flex-[65%]">
          <div>
            <motion.h3
              variants={textVariant()}
              className="text-[22px] md:text-[28px] font-bold"
            >
              Services
            </motion.h3>
            <motion.p variants={subHeading()} className="italic">
              Let's build something together!
            </motion.p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 place-items-center">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
