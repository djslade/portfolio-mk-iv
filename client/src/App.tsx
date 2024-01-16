import "./styles/main.scss";
import { motion } from "framer-motion";
import { AppBackground, AppContainer } from "./components";
import {
  About,
  Contact,
  Header,
  Landing,
  Projects,
  Skills,
  MobileNav,
} from "./modules";
import { useActiveView, useMobileNavView } from "./contexts";
import { useEffect, useRef, useState } from "react";

function App() {
  const { activeView } = useActiveView();

  const { mobileNavView } = useMobileNavView();

  const mainRef = useRef<HTMLDivElement>(null);

  const [scrolling, setScrolling] = useState<boolean>(false);

  const getActiveView = () => {
    switch (activeView) {
      case "landing":
        return <Landing />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      case "projects":
        return <Projects />;
      default:
        return <Landing />;
    }
  };

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
    <AppContainer>
      <AppBackground />
      <motion.div
        ref={mainRef}
        layout
        className="main"
        initial={{ height: 0 }}
        whileInView={{ height: "auto" }}
        transition={{ duration: 0.3 }}
      >
        <Header scrolling={scrolling} />
        {mobileNavView ? <MobileNav /> : getActiveView()}
      </motion.div>
    </AppContainer>
  );
}

export default App;
