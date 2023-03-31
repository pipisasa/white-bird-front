// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import { useTrail, animated } from "react-spring";
// import s from './Loader.module.scss'

// const Loader = () => {
//   const [start, setStart] = useState(false);
//   const text = 'ЛМК БЕЛАЯ ПТИЦА'

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStart(true);
//     }, 100);
//     return () => clearInterval(interval);
//   }, []);

//   const chars = text.split("");

//   const trail = useTrail(chars.length, {
//     from: { opacity: 0, color: "white" },
//     to: { opacity: 1, color: "#D0A666" },
//     delay: 1,
//     config: {duration: 50},
//     immediate: !start,
//   });

//   return(
//     <div className={s.loader}>
//         {trail.map((props, index) => (
//         <animated.span key={index} style={props}>
//           {chars[index]}
//         </animated.span>
//       ))}
//     </div>
//   )
// };

// export default Loader;

// import classNames from "classnames";
// import s from "./Loader.module.scss";
// import { useState, useEffect, useRef } from "react";
// import { useTrail, animated } from "react-spring";

// const Loader = () => {
//   const [showLoader, setShowLoader] = useState(false);
//   const text = "ЛМК БЕЛАЯ ПТИЦА";
//   const chars = text.split("");
//   const trail = useTrail(chars.length, {
//     from: { opacity: 0, color: "white" },
//     to: { opacity: 1, color: "#D0A666" },
//     delay: 1,
//     config: { duration: 50 },
//     immediate: !showLoader,
//   });

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setShowLoader(true);
//     }, 100); // задержка перед показом лоадера

//     return () => clearTimeout(timeoutId);
//   }, []);

//   console.log(showLoader);
//   return (
//     <div className={s.loaders}>
//       <div className={classNames(showLoader ? s.loader_hidden : s.loader)}>
//         {trail.map((props, index) => (
//           <animated.span key={index} style={props}>
//             {chars[index]}
//           </animated.span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Loader;


import classNames from "classnames";
import s from "./Loader.module.scss";
import { useState, useEffect, useRef } from "react";
import { useTrail, animated } from "react-spring";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [showLoaderS, setShowLoaderS] = useState(false);

  const text = "ЛМК БЕЛАЯ ПТИЦА";
  const chars = text.split("");
  const trail = useTrail(chars.length, {
    from: { opacity: 0, color: "white" },
    to: { opacity: 1, color: "#D0A666" },
    delay: 1,
    config: { duration: 50 },
    immediate: !showLoader,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoaderS(true);
    }, 3500); 

    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(true);
    }, 2500); 

    return () => clearTimeout(timeoutId);
  }, []);
  console.log(showLoader)

  return (
      <div className={classNames(s.loader, showLoader ? s.hidden : s.visible ,  showLoaderS ? s.lol: "")}>
        {trail.map((props, index) => (
          <animated.span key={index} style={props}>
            {chars[index]}
          </animated.span>
        ))}
      </div>
  );
};

export default Loader;