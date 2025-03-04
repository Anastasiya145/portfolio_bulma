import IntroSection from "./sections/IntroSection";
import PortfolioSection from "./sections/PortfolioSection";
import AboutmeSection from "./sections/AboutmeSection";
import i18n from "./i18n/i18n";
import { I18nextProvider } from "react-i18next";
import AppBar from "./components/AppBar/AppBar";
import SkillsSection from "./sections/SkillsSection";
import CertificatesSection from "./sections/CertificatesSection";
import ContactMeSection from "./sections/ContactMeSection";
import Footer from "./components/Footer";
import { SnackbarProvider } from "notistack";
import WorkExperienceSection from "./sections/WorkExperienceSection";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="App">
          <header className="header">
            <AppBar />
            <IntroSection />
          </header>
          <main>
            <AboutmeSection />
            <div className="colored-background">
              <SkillsSection />
            </div>

            <PortfolioSection />
            <WorkExperienceSection />

            <div className="colored-background">
              <CertificatesSection />
            </div>

            <ContactMeSection />
          </main>
          <Footer />
        </div>
      </SnackbarProvider>
    </I18nextProvider>
  );
}

export default App;
