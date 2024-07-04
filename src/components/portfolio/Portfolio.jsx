import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Blogs",
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/philosophy-free-seo-friendly-website-templates.jpg",
    desc: "I have experience in working with the components based system. Making the website more flexiable for improvements and changes.",
  },
  {
    id: 2,
    title: "Ruby on Rails Ecommerce ",
    img: "https://therichpost.com/wp-content/uploads/2021/01/Reactjs-Ecommerce-Templates-Free-Template-1.png",
    desc: "I also have a great experience with the Model, controller and views system. And using them to create a Ecommerce website for posting ads for a products",
  },
  {
    id: 3,
    title: "Volunter Experience",
    img: "https://th.bing.com/th/id/R.bfdc944e104c7bb1b176778f9cf78c2f?rik=LNrLIfLRzi1dVg&pid=ImgRaw&r=0",
    desc: "I have also worked with many startups to build their websites and have acquired a great knowledeg about real life experience.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
