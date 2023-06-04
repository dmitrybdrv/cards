import React, {ChangeEvent, FC, useEffect} from "react";
import {InputAdornment, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

type PropsType ={
    value: string
    onChange: (search: string) => void
    debouncedSearch: (searchValue: string) => void
}

export const SearchInput: FC<PropsType> = ({value, onChange, debouncedSearch}) => {

    const onChangeInput = (eve: ChangeEvent<HTMLInputElement>) => {
        onChange(eve.currentTarget.value)
    }

    useEffect(() => {
        if(value.trim() !== '') {
            debouncedSearch(value)
        }
    }, [value])

    return (
        <Box sx={{display: "grid", width: "250px"}}>
            <label>{"Search"}</label>
            <TextField
                value={value}
                onChange={onChangeInput}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};
