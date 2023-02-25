import { FormControlLabel } from "@mui/material";
import React from "react";
import { MaterialUISwitch } from "./SwitchTheme.styled";

const SwitchTheme = () => {
  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
      label=""
    />
  );
};

export default SwitchTheme;
