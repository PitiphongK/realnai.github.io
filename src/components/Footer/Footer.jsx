import "./Footer.css";
import data from "../../assets/data.json";
import i18next from "i18next";
import cookies from "js-cookie";
import { useEffect } from "react";

const Footer = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = data.languages.find(
    (l) => l.code === currentLanguageCode
  );

  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="select-language">
          {data?.languages?.map((language, index, array) => (
            <a
              href={`/myWeb/${language.code}`}
              className="language"
              key={language.name}
            >
              <div
                className={`choose-language ${
                  currentLanguage.code === language.code && "active"
                }`}
                onClick={() => i18next.changeLanguage(language.code)}
              >
                <span
                  className={`flag-icon flag-icon-${language.country_code} flag-size`}
                ></span>
                <h4>{language.name}</h4>
              </div>
              {/* if last element */}
              {index !== array.length - 1 && <h4>|</h4>}
            </a>
          ))}
        </div>
        <h4>@realnaiku</h4>
      </div>
    </div>
  );
};

export default Footer;
