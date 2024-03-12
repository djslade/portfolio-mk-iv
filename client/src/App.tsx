import "./styles/main.scss";
import { AppBackground, AppContainer } from "./components";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./modules";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        {/* AppBackground is commented out for now as the star animation lags chrome browsers */}
        <AppBackground />
        <Main />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
