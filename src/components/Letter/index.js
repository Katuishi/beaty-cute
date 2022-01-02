import { motion } from "framer-motion";
import "./style.css";

export default function Letter({ word = "" }) {

  return (
    <>
      <div className="container">
        <motion.section
          className="box"
          initial={{ scale: 0.5, y: 500 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            ease: "linear",
            duration: 2.5,
            damping: 300,
            stiffness: 1000,
          }}
        >
          <motion.p
            className="letter"
          >
            {word}
          </motion.p>
        </motion.section>
      </div>
    </>
  );
}
