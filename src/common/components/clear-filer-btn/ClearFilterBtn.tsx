import { Box } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import React from "react";

export const ClearFilterBtn = ({}) => {
  return (
    <Box sx={{ display: "gid", width: "250px" }}>
      <label>{"Clear"}</label>
      <Box sx={{ display: "flex" }}>
        <ToggleButton value="center">
          <FilterAltOffIcon />
        </ToggleButton>
      </Box>
    </Box>
  );
};
