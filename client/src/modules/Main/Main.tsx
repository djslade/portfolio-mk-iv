import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  About,
  Contact,
  Header,
  Landing,
  MobileNav,
  NotFound,
  Projects,
  Skills,
} from "..";
import { useMobileNavView } from "../../contexts";
import classes from "./Main.module.scss";
import { Routes, Route, useLocation } from "react-router-dom";

export const Main = () => {
  const location = useLocation();
  const locationArr = location.pathname?.split("/") ?? [];
  const { mobileNavView } = useMobileNavView();

  const mainRef = useRef<HTMLDivElement>(null);

  const [scrolling, setScrolling] = useState<boolean>(false);

  const handleScroll = () => {
    if (!mainRef || !mainRef.current) return;
    const scrollTop = mainRef.current.scrollTop;

    // Check if the scroll position is at the top
    if (scrollTop <= 80) {
      setScrolling(false);
    } else {
      setScrolling(true);
    }
  };

  useEffect(() => {
    if (!mainRef || !mainRef.current) return;
    mainRef.current.addEventListener("scroll", handleScroll);

    return () => mainRef.current?.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={mainRef}
        layout
        className={classes.main}
        initial={{ height: 0 }}
        whileInView={{ height: "auto" }}
        transition={{ duration: 0.3 }}
      >
        <Header scrolling={scrolling} />
        {mobileNavView ? (
          <MobileNav />
        ) : (
          <Routes location={location} key={locationArr[1]}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
