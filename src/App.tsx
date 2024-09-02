import HomePage from "./pages/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import AboutmePage from "./pages/AboutmePage";
import i18n from "./i18n/i18n";
import { I18nextProvider } from "react-i18next";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutmePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
