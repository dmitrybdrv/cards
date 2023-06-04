import {Box} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import React, {FC} from "react";

type PropsType ={
    onClearFilters: () => void
}

export const ClearFilterBtn: FC<PropsType> = ({onClearFilters}) => {
    return (
        <Box sx={{display: "gid", width: "250px"}}>
            <label>{"Clear"}</label>
            <Box sx={{display: "flex"}}>
                <ToggleButton value="center" onClick={onClearFilters}>
                    <FilterAltOffIcon/>
                </ToggleButton>
            </Box>
        </Box>
    );
};
