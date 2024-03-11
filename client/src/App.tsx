import "./styles/main.scss";
import { AppContainer } from "./components";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./modules";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        {/* AppBackground is commented out for now as the star animation lags chrome browsers */}
        <Main />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
