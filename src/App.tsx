import HomePage from "./pages/HomePage";
import { Route, HashRouter, Routes } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import AboutmePage from "./pages/AboutmePage";
import i18n from "./i18n/i18n";
import { I18nextProvider } from "react-i18next";
import { routes } from "./routes";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <HashRouter>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.about} element={<AboutmePage />} />
          <Route path={routes.portfolio} element={<PortfolioPage />} />
        </Routes>
      </HashRouter>
    </I18nextProvider>
  );
}

export default App;
