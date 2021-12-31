import { motion } from "framer-motion";
import "./style.css";

export default function Letter({ word = "" }) {
  return (
    <>
      <div className="container">
        <motion.section
          className="box"
          animate={{ y: [500, 0]}}
          transition={{
            ease: "easeOut",
            duration: 3,
          }}
        >
          <motion.p
            animate={{ opacity:0 }}
            transition={{ ease: "linear", duration: 5 }}
            className="letter"
          >
            {word}
          </motion.p>
        </motion.section>
      </div>
    </>
  );
}
