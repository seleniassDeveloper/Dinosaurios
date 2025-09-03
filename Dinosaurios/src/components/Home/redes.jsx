// src/components/Redes.jsx
import React from "react";
import "../../css/sections/Redes.css";
import { FaTiktok, FaTwitch, FaInstagram, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Redes() {
  const { t } = useTranslation();

  return (
    <div>
      <p className="redes-follow-label">{t("social.follow")}</p>

      <div className="redes-streams">
        <a
          href="https://www.tiktok.com/@tuusuario"
          target="_blank"
          rel="noreferrer"
          className="stream-link-circle tiktok"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.twitch.tv/tuusuario"
          target="_blank"
          rel="noreferrer"
          className="stream-link-circle twitch"
        >
          <FaTwitch />
        </a>
        <a
          href="https://www.instagram.com/tuusuario"
          target="_blank"
          rel="noreferrer"
          className="icon-circle icon instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/tuusuario"
          target="_blank"
          rel="noreferrer"
          className="icon-circle icon facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}