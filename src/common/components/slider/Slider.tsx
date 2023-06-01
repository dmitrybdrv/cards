import ToggleButton from "@mui/material/ToggleButton";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import * as React from "react";
import { useState } from "react";

export const SliderComponent = ({}) => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ display: "gid", width: "250px" }}>
      <label>{"Slider"}</label>
      <Box sx={{ display: "flex" }}>
        <ToggleButton value="left">{value[0]}</ToggleButton>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
        <ToggleButton value="left">{value[1]}</ToggleButton>
      </Box>
    </Box>
  );
};
