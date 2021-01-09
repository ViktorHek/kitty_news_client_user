import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <p id="footer" data-cy="footer">
        {t("footer")} {React.version}
      </p>
    </footer>
  );
};

export default Footer;