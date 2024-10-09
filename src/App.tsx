import IntroSection from "./sections/IntroSection";
import PortfolioSection from "./sections/PortfolioSection";
import AboutmeSection from "./sections/AboutmeSection";
import i18n from "./i18n/i18n";
import { I18nextProvider } from "react-i18next";
import AppBar from "./components/AppBar/AppBar";
import SkillsSection from "./sections/SkillsSection";
import CertificatesSection from "./sections/CertificatesSection";
import ContactMeSection from "./sections/ContactMeSection";
import "bulma/css/bulma.min.css";
import ScrollToTopButton from "./components/custom buttons/ScrollToTopButton/ScrollToTopButton";
import Footer from "./components/Footer";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <div className="header-intro-gradient">
          <div className="header">
            <AppBar />
          </div>
          <IntroSection />
        </div>
        <main>
          <AboutmeSection />
          <SkillsSection />

          <PortfolioSection />
          <CertificatesSection />
          {/* add later my Work Experience */}
          <ContactMeSection />
          <ScrollToTopButton />
        </main>
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;
