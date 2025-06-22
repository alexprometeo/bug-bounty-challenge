import React from "react";
import { useTranslation } from "react-i18next";
import { MenuItem, Select } from "@mui/material";

import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select
      className="ls-select"
      value={i18n.language}
      onChange={handleChange}
      size="small"
      variant="outlined"
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="de">Deutsch</MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
