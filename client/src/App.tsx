import "./styles/main.scss";
import { AppBackground, AppContainer } from "./components";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./modules";

function App() {
  return (
    <AppContainer>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <AppBackground />
        <Main />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
