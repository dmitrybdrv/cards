import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {InputAdornment, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import {useActions} from "../../hooks";
import {packsThunk} from "../../../features/packs";
import _ from "lodash";


export const SearchInput = () => {
    const [searchValue, setSearchValue] = useState("")
    const {getPacks} = useActions(packsThunk)

    const onChangeInput = (eve: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(eve.currentTarget.value)
    }
    const debouncedSearch = useCallback(_.debounce((someValue: string) => {
        getPacks({packName: someValue})
    }, 600), [])


    useEffect(() => {
        if(searchValue.trim() !== '') {
            debouncedSearch(searchValue)
        }
    }, [searchValue])

    return (
        <Box sx={{display: "grid", width: "250px"}}>
            <label>{"Search"}</label>
            <TextField
                value={searchValue}
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
