import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";

const VisibleExpense = ({ children, delay, show }) => {
  let timer = null;
  const [visible, setVisible] = useState(!show);

  useEffect(() => {
    setTimer();
  }, [show]);

  const setTimer = () => {
    if (timer != null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setVisible(!visible);
      timer = null;
    }, delay);
  };
  return (
    visible && (
      <FadeIn
        in={show}
        timeout={{
          enter: delay + 2,
          exit: delay - 2,
        }}
      >
        {children}
      </FadeIn>
    )
  );
};

export default VisibleExpense;
