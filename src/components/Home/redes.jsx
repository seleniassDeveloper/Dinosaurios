// src/components/Redes.jsx
import React from "react";
import "../../css/sections/Redes.css";
import {
  FaTiktok,
  FaTwitch,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Redes() {
  const { t } = useTranslation();

  return (
    <div className="redes-container">
      <p className="redes-follow-label">{t("social.follow")}</p>

      <div className="redes-streams">
        <a
          href="https://www.instagram.com/paleocueva.lacev/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="stream-link instagram"
          aria-label="Instagram Paleocueva"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.instagram.com/lacevmacn/"
          target="_blank"
          rel="noreferrer"
          className="stream-link instagram"
          aria-label="Instagram LACEV"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/lacevmacn/?locale=es_LA"
          target="_blank"
          rel="noreferrer"
          className="stream-link facebook"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com/channel/UCgwWHSuk_LZz8-tlgtCY1CA"
          target="_blank"
          rel="noreferrer"
          className="stream-link youtube"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://x.com/LACEV_MACN"
          target="_blank"
          rel="noreferrer"
          className="stream-link twitter"
          aria-label="Twitter (X)"
        >
          <FaTwitter />
        </a>
        <a
          href="https://discord.com/invite/xR35DweHxa"
          target="_blank"
          rel="noreferrer"
          className="stream-link discord"
          aria-label="Discord"
        >
          <FaDiscord />
        </a>
      </div>
    </div>
  );
}