import "./styles/main.scss";
import { motion } from "framer-motion";
import { AppBackground, AppContainer } from "./components";
import { About, Header, Landing, Skills } from "./modules";
import { useActiveView } from "./contexts";

function App() {
  const { activeView } = useActiveView();

  return (
    <AppContainer>
      <AppBackground />
      <motion.div layout className="main">
        <Header />
        {activeView === "landing" && <Landing />}
        {activeView === "about" && <About />}
        {activeView === "skills" && <Skills />}
      </motion.div>
    </AppContainer>
  );
}

export default App;
