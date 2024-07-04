import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on providing customized
          <br /> web apps to businesses
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Costumized</motion.b> Web Applications
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Ecommerce Stores</h2>
          <p>
            I create customized ecommerce stores tailored to your business needs,
            ensuring a seamless shopping experience for your customers. 
            From intuitive navigation to secure payment processing, my 
            ecommerce solutions help drive sales and enhance customer satisfaction.
          </p>

          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Staffing Application</h2>
          <p>
            I develop robust staffing applications designed to streamline recruitment
            processes and manage workforce efficiently. My solutions offer 
            features like job postings, candidate tracking, interview scheduling, 
            and performance analytics to help businesses find and retain top talent.
          </p>

          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>CMS</h2>
          <p>
            I specialize in creating and customizing Content Management Systems (CMS) 
            that allow you to easily manage and update your website content. 
            My solutions are user-friendly, scalable, and tailored to your specific needs, 
            enabling efficient content organization and publishing.
          </p>
          <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
          <h2>Anything</h2>
          <p>
            I provide flexible and comprehensive solutions for any of your digital needs, 
            whether it’s developing a unique web application, 
            optimizing your existing system, or consulting on best practices. 
            My expertise ensures your project is handled with professionalism and innovation.
          </p>

          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
