import "./styles/main.scss";
import { motion } from "framer-motion";
import { AppBackground, AppContainer } from "./components";
import { About, Contact, Header, Landing, Projects, Skills } from "./modules";
import { useActiveView } from "./contexts";

function App() {
  const { activeView } = useActiveView();

  return (
    <AppContainer>
      <AppBackground />
      <motion.div
        layout
        className="main"
        initial={{ height: 0 }}
        whileInView={{ height: "auto" }}
        transition={{ duration: 0.3 }}
      >
        <Header />
        {activeView === "landing" && <Landing />}
        {activeView === "about" && <About />}
        {activeView === "skills" && <Skills />}
        {activeView === "contact" && <Contact />}
        {activeView === "projects" && <Projects />}
      </motion.div>
    </AppContainer>
  );
}

export default App;
