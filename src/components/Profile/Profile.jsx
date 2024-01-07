import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import suisei from "../../assets/images/suisei.png";
import phong from "../../assets/images/my_pic.png";
import Animation from "../Animation/Animation";

import "./Profile.css";

export default function Header() {
  const { t } = useTranslation();
  const profileRef = useRef(null);

  return (
    <div className="profile" ref={profileRef} id="profile">
      <Animation containerRef={profileRef} />
      <div className="profile-wrap">
        <div className="header">
          <h1>{t("hi_im_pitiphong")}</h1>
          <h3>{t("a_software_engineer_student")}</h3>
        </div>
        <div className="profile-picture">
          <img className="suisei" src={phong} alt="suisei picture" />
        </div>
      </div>
    </div>
  );
}
