import React from "react";

import { motion } from "framer-motion";

function ScrollAnimated({ children, ...rest }) {
  return (
    <motion.div
      initial={{ y: -20, scale: 0.98 }}
      whileInView={{ y: 0, scale: 1 }}
      viewport={{ once: false }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimated;
