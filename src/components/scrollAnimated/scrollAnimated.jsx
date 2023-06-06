import React from "react";

import { motion } from "framer-motion";

function ScrollAnimated({ children, ...rest }) {
  return (
    <motion.div
      initial={{ y: -5, scale: 0.99 }}
      whileInView={{ y: 0, scale: 1 }}
      viewport={{ once: false }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimated;
