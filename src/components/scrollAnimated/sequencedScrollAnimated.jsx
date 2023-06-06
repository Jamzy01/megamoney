import React from "react";
import ScrollAnimated from "./scrollAnimated";

function SequencedScrollAnimated({
  children,
  initialOffset = 0,
  offset = 0.02,
}) {
  return (
    <>
      {children.map((child, index) => (
        <ScrollAnimated transition={{ delay: initialOffset + offset * index }}>
          {child}
        </ScrollAnimated>
      ))}
    </>
  );
}

export default SequencedScrollAnimated;
