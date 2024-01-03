import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Header from "./components/Profile/Profile.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("suisei");
  });

  // const releaseDate = new Date("2021-09-01");
  // const timeDiff = new Date() - releaseDate;
  // const number_of_days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
      {/* <h1>{t("welcome_message")}</h1>
      <p>{t("days_since_release", { number_of_days })}</p> */}
    </>
  );
}

export default App;
