import { Tab, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

export const CardsChanger: React.FC<any> = ({}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ display: "grid", height: "100%" }}>
      <label>{"Show packs cards"}</label>

      <Tabs value={value} onChange={handleChange}>
        <Tab label={"My"} />
        <Tab label={"All"} />
      </Tabs>
    </Box>
  );
};
