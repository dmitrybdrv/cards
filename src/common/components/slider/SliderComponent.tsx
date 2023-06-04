import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import * as React from "react";
import {FC, useEffect} from "react";
import {useActions} from "../../hooks";
import {packsThunk} from "../../../features/packs";

type PropsType = {
    sliderValue: number[]
    maxCardsCount: number
    setSliderValue: (newValue: number[]) => void
}

export const SliderComponent: FC<PropsType> = ({sliderValue, setSliderValue, maxCardsCount}) => {
    const {getPacks} = useActions(packsThunk)
    const marks = [
        {value: 0, label: sliderValue[0]},
        {value: maxCardsCount, label: sliderValue[1]},
    ]

    const handleChange = (event: Event | string, newValue: number | number[]) => {
        setSliderValue(newValue as number[])
    }

    useEffect(() => {
        getPacks({min: sliderValue[0], max: sliderValue[1]})
    }, [sliderValue])

    return (
        <Box sx={{display: "gid", width: "250px"}}>
            <label>{"Slider"}</label>
            <Box sx={{display: "flex"}}>
                <Slider
                    value={sliderValue}
                    onChange={handleChange}
                    min={0}
                    max={maxCardsCount}
                    marks={marks}
                    valueLabelDisplay={'auto'}
                />
            </Box>
        </Box>
    );
}