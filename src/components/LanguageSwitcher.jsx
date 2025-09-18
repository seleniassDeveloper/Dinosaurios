import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
      <button onClick={() => changeLanguage("es")}>🇪🇸 ES</button>
      <button onClick={() => changeLanguage("en")}>🇬🇧 EN</button>
    </div>
  );
}