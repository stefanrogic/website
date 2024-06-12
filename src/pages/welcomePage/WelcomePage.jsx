import "./welcomePage.scss";

import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WelcomePage = () => {
  const [redirect, setRedirect] = useState(false);
  const [fill, setFill] = useState(false);

  const mainControls = useAnimation();
  const secondaryControls = useAnimation();
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    const timerOne = setTimeout(() => {
      setFill(true);
    }, 6500);

    return () => {
      clearTimeout(timerOne);
    };
  });

  useEffect(() => {
    ref.current.focus();

    const timerThree = setTimeout(() => {
      ref.current.focus();
    }, 1);

    return () => {
      clearTimeout(timerThree);
    };
  }, []);

  useEffect(() => {
    ref.current.focus();
    if (redirect) {
      const timerTwo = setTimeout(() => {
        navigate("/home");
      }, 500);

      return () => {
        clearTimeout(timerTwo);
      };
    }
  }, [redirect]);

  return (
    <div
      ref={ref}
      className="welcome-page"
      onKeyDown={(e) => {
        e.preventDefault();
        if (e.code === "Enter") {
          mainControls.start("secondPhase");
          setRedirect(true);
        }
      }}
      tabIndex={-1}
    >
      <motion.svg
        className="signature"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 195.44 79.25"
        variants={{ firstPhase: { width: "300px" }, secondPhase: { opacity: 0 } }}
        initial="firstPhase"
        animate={secondaryControls}
        transition={{ duration: 0 }}
      >
        <motion.path
          d="M34.49,15.3c1.96-1.92,3.68-4.78,3.28-7.61-.46-3.22-3.66-4.96-6.49-5.79-6.69-1.96-13.61-.08-19.31,3.69S1.05,15.86.1,23.08c-.55,4.17,1.2,7.69,4.99,9.56,3.28,1.63,6.83,2.04,10.44,2.24,2.25.13,4.54.82,6.53,1.89s2.45,2.76,1.37,4.72c-.97,1.75-2.74,3.18-4.64,3.77-2.08.65-4.23.08-6.03-1.05-.89-.56-3.01.66-1.86,1.38,3.02,1.91,6.67,2.25,9.93.69,2.65-1.27,5.75-4.09,5.68-7.29-.03-1.67-1.19-2.84-2.58-3.6-1.72-.95-3.71-1.66-5.64-2.02-1.68-.31-3.39-.2-5.08-.39s-3.47-.65-5.1-1.25c-1.78-.65-3.48-1.63-4.55-3.24-1.19-1.8-1.27-4.03-.92-6.09.58-3.43,2.11-6.7,4.22-9.46C11.14,7.29,18.21,2.68,25.51,2.81c2.87.05,6.66.85,8.67,3.05,2.51,2.75.54,6.53-1.71,8.74-.42.41-.16.96.31,1.16.58.24,1.29-.05,1.71-.46h0Z"
          stroke="#4A4A4A"
          fill={fill ? "#4A4A4A" : ""}
          strokeWidth="1"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, draw: { pathLength: 1, transition: { duration: 0.5, ease: "easeInOut" } } }}
          initial="hidden"
          animate="draw"
        />
        <motion.path
          d="M32.77,34.3c1.4-3.67,2.78-7.47,3.43-11.35.3-1.75.57-4.27-1.38-5.16s-4.96.39-5.32,2.64c-.22,1.43.25,3.2.35,4.64.15,2.17.27,4.35.37,6.52s.19,4.39.26,6.58c.06,1.84-.15,3.83.81,5.48,1.43,2.44,4.22,2.47,6.55,1.28,1.59-.82,2.83-2.29,4.1-3.53,1.64-1.59,3.28-3.18,4.92-4.77.55-.53-1.71-.13-2.01.08-.78.55-1.8-.32-2.18-1.03-.35-.66-.42-1.5-.13-2.19.66-1.55,2.49-1.46,3.84-1.01.48.16,1.26-.09,1.69-.32.23-.12.81-.43.3-.6-1.59-.52-3.23-.38-4.82.08-1.27.37-2.84.97-3.39,2.29-.63,1.51.17,3.24,1.69,3.77s3.53-.02,4.83-.94l-2.01.08c-2.33,2.25-4.62,4.55-6.98,6.76-.48.45-1.05,1.12-1.72,1.14-.56.02-1.12-.38-1.52-.75-.8-.75-1.28-1.86-1.44-2.93-.19-1.22-.1-2.53-.13-3.76-.06-1.77-.13-3.54-.2-5.31-.15-3.38-.26-6.79-.64-10.16-.06-.52-.19-1.06-.18-1.58s.18-1.1.49-1.53l.12-.15c.14-.2.16-.19.05.03.16.03.43.23.56.34,1.42,1.2.87,3.81.54,5.37-.74,3.56-1.96,7.04-3.26,10.43-.15.38,2.15.17,2.38-.44h0Z"
          stroke="#4A4A4A"
          fill={fill ? "#4A4A4A" : ""}
          strokeWidth="1"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, draw: { pathLength: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 } } }}
          initial="hidden"
          animate="draw"
        />
        <motion.path
          d="M39.03,42.76c.76,2.41,2.6,4.39,5.04,5.12,2.8.84,6.06.03,8.36-1.73,2.98-2.29,4.32-6.11,5.8-9.42,1.34-3.01,2.69-6.02,3.93-9.07,1.36-3.35,2.5-6.72,2.89-10.33.25-2.28.7-5.31-.38-7.46-.92-1.84-3.29-1.94-5.07-1.51-3.12.74-5.64,2.97-6.33,6.15-.29,1.35-.24,2.72-.3,4.09-.09,2.2-.21,4.4-.25,6.61-.16,8.98.37,17.97,1.62,26.87.62,4.46,1.43,8.89,2.4,13.29.41,1.86.82,3.71,1.4,5.52.4,1.24.46,2.52-.05,3.73-.18.42-.5,1.16-.92,1.4-.63.35-1.43-.39-1.88-.84-1.03-1.03-1.48-2.37-1.52-3.81-.09-3.06.05-6.14.2-9.2.19-3.87.43-7.74.57-11.62.06-1.81-.1-3.75.24-5.54.1-.55.29-1.36.88-1.57.55-.19,1.5.15,2.04.26,2.26.48,5.64.97,6.96-1.54.23-.43.3-.9.41-1.37.22-.91.54-1.72,1.01-2.53.77-1.32,1.75-2.73,3.21-3.34,1.58-.66,3.44-.17,4.92.54.7.34,2.92-.69,1.92-1.17-2.87-1.38-6.36-1.45-9.08.33-2.45,1.59-3.8,4.29-4.52,7.02-.37,1.41-1.39,1.16-2.62.91-1.32-.27-2.64-.63-4-.44-1.27.18-2.56.84-3.17,2.02-.72,1.4-.53,3.17-.57,4.69-.17,7.19-.84,14.37-.82,21.57,0,2.57.3,5.07,2.7,6.53s5.3,0,6.35-2.42c1.15-2.63-.29-5.53-.89-8.14-1.02-4.39-1.86-8.81-2.53-13.26-1.35-9.01-1.99-18.13-1.88-27.23.03-2.25.1-4.5.22-6.75.07-1.36.02-2.74.2-4.1.24-1.79.92-3.51,2.45-4.58,1.04-.74,2.73-1.35,3.76-.52,1.47,1.19,1.15,4.17,1.05,5.76-.11,1.82-.33,3.65-.74,5.43-1.06,4.58-3.16,8.94-5.05,13.22-.83,1.89-1.66,3.78-2.52,5.65-.79,1.73-1.68,3.52-3.01,4.9-2.47,2.56-6.36,2.57-8.69-.26-.61-.74-1.06-1.59-1.35-2.5-.26-.84-2.67-.17-2.41.65h0Z"
          stroke="#4A4A4A"
          fill={fill ? "#4A4A4A" : ""}
          strokeWidth="1"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, draw: { pathLength: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 1 } } }}
          initial="hidden"
          animate="draw"
        />
        <motion.path
          d="M62.01,43.35c2.83,2.39,6.28,4.24,9.85,2.09,2.52-1.52,3.8-4.57,3.75-7.42-.01-.66-2.39-.18-2.41.65-.06,2.05-.27,4.92.93,6.73.86,1.29,2.69.8,3.75.01,1.6-1.19,2.6-3.28,3.36-5.07.96-2.25,1.37-4.65,1.33-7.08l-2.41.65c.2,3.62.4,7.25.61,10.87.04.69,2.32.14,2.41-.5.18-1.29.51-2.53.99-3.74.39-.99.85-2.46,1.81-3.06,2.56-1.6,3.95,2.9,4.56,4.45s1.4,3.75,2.98,4.42c1.82.76,4.04-.23,5.47-1.38.41-.33.24-.63-.2-.75-.52-.14-1.3.13-1.71.46-.91.73-1.7.81-2.45-.16-.68-.88-1.18-1.99-1.59-3.02-.69-1.74-1.36-4.38-3.26-5.17s-4.73-.21-6.22,1.32c-1.67,1.72-2.45,4.66-2.77,6.96l2.41-.5c-.2-3.62-.4-7.25-.61-10.87-.04-.67-2.43-.18-2.41.65.06,3.53-1.02,7.16-3.1,10.04-.18.25-.36.5-.58.72-.12.14-.26.27-.41.39.72.08.93.03.63-.16,0-.04-.33-.45-.36-.5-.16-.3-.25-.65-.34-.98-.45-1.74-.44-3.61-.39-5.39l-2.41.65c.04,1.99-.64,3.91-1.95,5.42-2.14,2.46-5.12-.07-6.98-1.64-.59-.5-2.82.42-2.25.9h0Z"
          stroke="#4A4A4A"
          fill={fill ? "#4A4A4A" : ""}
          strokeWidth="1"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, draw: { pathLength: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 1.5 } } }}
          initial="hidden"
          animate="draw"
        />
        <motion.path
          d="M19.84,23.75c1.39.87,2.95,1.18,4.57,1.29,2.08.15,4.18.15,6.26.17,4.42.04,8.84-.08,13.25-.34.44-.03,1.37-.17,1.61-.6s-.21-.51-.59-.49c-3.95.24-7.9.36-11.86.35-2.01,0-4.01-.04-6.02-.12-1.73-.07-3.45-.17-4.95-1.12-.43-.27-1.13-.08-1.57.09-.14.05-1.1.52-.7.77h0Z"
          stroke="#4A4A4A"
          fill={fill ? "#4A4A4A" : ""}
          strokeWidth="1"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, draw: { pathLength: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 2 } } }}
          initial="hidden"
          animate="draw"
        />

        {/* ---------------------------- */}

        <motion.path
          d="M117.15.88c.18,16.38-.31,32.76-1.46,49.1-.07,1.03,2.36.57,2.42-.28,1.15-16.34,1.63-32.72,1.46-49.1-.01-1.05-2.43-.55-2.42.28h0Z"
          stroke="#4A4A4A"
          fill={fill ? "#4A4A4A" : ""}
          strokeWidth="1"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, draw: { pathLength: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 2.5 } } }}
          initial="hidden"
          animate="draw"
        />
        <motion.path
          d="M106.27,23.84c-1.3-4.71-2.3-10.45,2.95-13.06,2.21-1.1,4.73-1.64,7.12-2.19,2.68-.62,5.39-1.11,8.12-1.46,4.84-.62,11.18-1.55,14.86,2.51,2.36,2.6,2.81,6.66,2.73,10.01-.08,3.67-.95,7.34-2.52,10.66-.36.77-.67,1.3-1.26,1.9-1.64,1.64-3.31,3.22-5.13,4.65-3.34,2.62-7.19,4.6-11.07,6.3-.65.28-1.38.68-2.04.27-.7-.44-1.12-1.49-1.17-2.28,0-.03.05-.44.02-.5-.18-.44,0,.18-.36,0,.26.13.67.13.96.23.79.29,1.5.78,2.06,1.4s1.02,1.43,1.57,2.12c.76.95,1.61,1.82,2.52,2.64,1.82,1.64,3.91,3.05,6.22,3.91s4.68,1.15,6.89.07c1.62-.79,2.86-2.18,3.63-3.8.57-1.22-1.86-1.18-2.3-.24-1,2.12-2.77,3.42-5.19,2.88s-4.56-1.85-6.45-3.38c-1.09-.89-2.09-1.88-2.98-2.97-.6-.73-1.07-1.57-1.7-2.27-1.12-1.26-2.87-2.26-4.59-2.29-4.46-.08-2.81,6.28.81,6.39,2.33.07,4.73-1.55,6.73-2.54s4.14-2.11,6.05-3.43,3.61-2.75,5.27-4.28c1.2-1.11,2.61-2.23,3.39-3.69,1.71-3.21,2.73-6.9,3.01-10.52.31-3.97-.03-8.88-2.71-12.07-3.51-4.18-9.46-4.16-14.41-3.67-3.43.34-6.85.88-10.22,1.61-2.99.65-6.15,1.31-8.91,2.68-2.47,1.22-4.42,3.13-5.15,5.84-.83,3.07.01,6.25.83,9.22.3,1.07,2.71.43,2.41-.65h0Z"
          stroke="#4A4A4A"
          fill={fill ? "#4A4A4A" : ""}
          strokeWidth="1"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, draw: { pathLength: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 3 } } }}
          initial="hidden"
          animate="draw"
        />
        <motion.path
          d="M149.81,35.01c-2.16,1.03-4.3,2.5-5.45,4.68-1.06,2.02-1.26,4.67.23,6.54s3.99,2.34,6.1,1.53c2.48-.94,3.57-3.4,3.84-5.89s.36-6.02-2.68-6.86c-.55-.15-1.3.06-1.71.46-.38.37-.25.78.25.92,1.92.53,1.91,3.19,1.81,4.74-.11,1.78-.33,4.02-1.84,5.21-.51.4-.98.43-1.63.23-.75-.22-1.41-.71-1.89-1.32-1.12-1.41-1.08-3.49-.4-5.08.81-1.9,2.54-3.22,4.36-4.09.35-.17.97-.57.63-1.02-.31-.42-1.23-.24-1.61-.06h0Z"
          stroke="#4A4A4A"
          fill={fill ? "#4A4A4A" : ""}
          strokeWidth="1"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, draw: { pathLength: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 3.5 } } }}
          initial="hidden"
          animate="draw"
        />
        <motion.path
          d="M170.59,35.78c-3.55-.94-7.43-1.43-10.84.31-2.71,1.38-4.98,4.36-3.67,7.48s4.78,4.03,7.84,3.29c3.4-.83,5.86-3.42,6.46-6.87l-2.39.38c-1.08,12.86-1.79,25.75-2.12,38.64-.01.51,2.39.15,2.41-.65.32-12.81,1.02-25.61,2.09-38.38.06-.76-2.28-.27-2.39.38-.39,2.2-1.63,4.71-3.91,5.45-2.4.77-4.94-.98-5.7-3.24s.3-4.35,2.1-5.6c2.36-1.64,5.6-.85,8.16-.18.53.14,1.23,0,1.7-.28.21-.13.83-.6.26-.75h0Z"
          stroke="#4A4A4A"
          fill={fill ? "#4A4A4A" : ""}
          strokeWidth="1"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, draw: { pathLength: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 4 } } }}
          initial="hidden"
          animate="draw"
        />
        <motion.path
          d="M174.12,37.23c-.08,1.66-.19,3.32-.23,4.99-.03,1.46.14,2.98,1.15,4.12.85.97,2.18,1.18,3.41,1.03,1.41-.17,2.83-.75,3.68-1.92.27-.37-.88-.29-.98-.28-.5.08-1.1.26-1.41.68-.1.14-.23.27-.37.38-.18.14-.17.11-.29.17.07-.03.33-.05.06-.02.14-.02-.07,0-.05,0-.14,0-.33-.02-.49-.06-.98-.25-1.63-1.09-1.96-2.01-.42-1.16-.36-2.42-.3-3.63.06-1.37.13-2.73.2-4.1.02-.41-2.38-.1-2.41.65h0Z"
          stroke="#4A4A4A"
          fill={fill ? "#4A4A4A" : ""}
          strokeWidth="1"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, draw: { pathLength: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 4.5 } } }}
          initial="hidden"
          animate="draw"
        />
        <motion.path
          d="M175.82,32.06c1.61,0,1.61-2.5,0-2.5s-1.61,2.5,0,2.5h0Z"
          stroke="#4A4A4A"
          fill={fill ? "#4A4A4A" : ""}
          strokeWidth="1"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, draw: { pathLength: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 5 } } }}
          initial="hidden"
          animate="draw"
        />
        <motion.path
          d="M188.86,41.26c1.11-.73,2.17-1.72,2.59-3.02s.1-2.64-.93-3.53c-2.25-1.93-5.96-.75-7.9,1.05-1.83,1.7-2.65,4.5-1.85,6.89s2.97,4.1,5.43,4.48c2.96.45,6.45-.87,8.14-3.38.29-.43-.26-.51-.6-.5-.45.02-1.32.18-1.61.6-.96,1.43-2.44,2.44-4.21,2.21-1.89-.25-3.6-1.63-4.43-3.32-.87-1.78-.76-3.86.17-5.58.45-.83,1.12-1.6,1.96-2.05.75-.4,1.59-.24,2.29.21,1.02.66,1.51,1.82,1.24,3.02s-1.14,2.09-2.16,2.76c-.41.27-.27.58.17.63.57.08,1.24-.15,1.71-.46h0Z"
          stroke="#4A4A4A"
          fill={fill ? "#4A4A4A" : ""}
          strokeWidth="1"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, draw: { pathLength: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 5.5 } } }}
          initial="hidden"
          animate="draw"
        />
        <motion.path
          d="M188.16,31.36l3.58-3.82c.25-.27.5-.55.75-.8.08-.08.31-.27.32-.28-.02.16-.75.12-.75.12.01-.07.54.46.57.51.16.24.27.52.38.79.18.45,1,.32,1.35.22.26-.07,1.24-.41,1.06-.86-.29-.73-.68-1.5-1.47-1.77-1.2-.41-2.59.2-3.45,1.05-1.58,1.56-3.05,3.24-4.57,4.86-.39.42.33.63.63.62.58-.01,1.2-.21,1.6-.64h0Z"
          stroke="#4A4A4A"
          fill={fill ? "#4A4A4A" : ""}
          strokeWidth="1"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, draw: { pathLength: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 6 } } }}
          initial="hidden"
          animate="draw"
        />
      </motion.svg>

      <motion.img
        className="signature"
        src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/signature.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9zaWduYXR1cmUuc3ZnIiwiaWF0IjoxNzE3NzcyNzQzLCJleHAiOjExMTc4NTcyNzQzfQ.sqD7YFS725w81QIFrs1SG-C10kyLZ9g5s_2LY09Yu1Q&t=2024-06-07T15%3A05%3A44.043Z"
        alt="signature"
        variants={{ firstPhase: { opacity: 0, width: "300px" }, secondPhase: { width: "100%", opacity: 1, top: "50px" } }}
        initial="firstPhase"
        animate={mainControls}
        transition={{ duration: 0.5 }}
      />

      <motion.div className="button-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 6.5 }}>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            secondaryControls.start("secondPhase");
            mainControls.start("secondPhase");
            setRedirect(true);
          }}
        >
          ENTER
        </span>
      </motion.div>

      {/* <motion.div className="loading-line" initial={{ display: "flex" }} animate={{ display: "none", transitionEnd: { display: "none" } }} transition={{ duration: 1, delay: 6.5 }}>
        <motion.div className="line" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 6.5 }} style={{ height: "2px", background: "#ff2e63" }}></motion.div>

        <h2>{percent}%</h2>
      </motion.div> */}

      <p>Work in progress</p>
    </div>
  );
};

export default WelcomePage;
