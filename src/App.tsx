import AppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import "bulma/css/bulma.min.css";
import AboutmePage from "./pages/AboutmePage";
import i18n from "./i18n/i18n";
import { I18nextProvider } from "react-i18next";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <AppBar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutmePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
