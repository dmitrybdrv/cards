import {Tab, Tabs} from "@mui/material";
import Box from "@mui/material/Box";
import React, {useEffect, useState} from "react";
import {useActions} from "../../hooks";
import {packsThunk, TabsType} from "../../../features/packs";

type PropsType = {
    setCardsValue: (value: TabsType) => void
    onCardsChanger: (userId: { user_id: string }) => void
    cardsValue: TabsType
}

export const CardsChanger: React.FC<PropsType> = ({setCardsValue, cardsValue, onCardsChanger}) => {

    const handleChange = (event: React.SyntheticEvent, newValue: TabsType) => setCardsValue(newValue)

    useEffect(() => {
        if (cardsValue === 'My') {
            onCardsChanger({user_id: '64551359c19c911fb48f5fb8'})
        } else if (cardsValue === 'All') {
            onCardsChanger({user_id: ''})
        }
    }, [cardsValue])

    return (
        <Box sx={{display: "grid", height: "100%"}}>
            <label>{"Show packs cards"}</label>

            <Tabs value={cardsValue} onChange={handleChange}>
                <Tab label={"My"} value={'My'}/>
                <Tab label={"All"} value={'All'}/>
            </Tabs>
        </Box>
    );
};
