import "./styles/main.scss";
import { AppContainer } from "./components";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./modules";

function App() {
  return (
    <AppContainer>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Main />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
