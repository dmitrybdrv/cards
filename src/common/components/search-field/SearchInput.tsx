import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

type PropsType = {
  onChange: (val: string) => void;
  value: string;
};

export const SearchInput: React.FC<PropsType> = ({ onChange, value }) => {
  return (
    <Box sx={{ display: "grid", width: "250px" }}>
      <label>{"Search"}</label>
      <TextField
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
