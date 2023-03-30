import React from "react";
import { useState, useEffect, useRef } from "react";
import { useTrail, animated } from "react-spring";
import s from './Loader.module.scss'

const Loader = () => {
  const [start, setStart] = useState(false);
  const text = 'ЛМК БЕЛАЯ ПТИЦА'

  useEffect(() => {
    const interval = setInterval(() => {
      setStart(true);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const chars = text.split("");

  const trail = useTrail(chars.length, {
    from: { opacity: 0, color: "white" },
    to: { opacity: 1, color: "#D0A666" },
    delay: 1,
    config: {duration: 50},
    immediate: !start,
  });

  return(
    <div className={s.loader}>
        {trail.map((props, index) => (
        <animated.span key={index} style={props}>
          {chars[index]}
        </animated.span>
      ))}
    </div>
  )
};

export default Loader;



