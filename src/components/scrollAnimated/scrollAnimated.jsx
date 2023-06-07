import React from "react";

import { motion } from "framer-motion";

function ScrollAnimated({ children, ...rest }) {
  return (
    <motion.div
      initial={{ y: -20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: false }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimated;
