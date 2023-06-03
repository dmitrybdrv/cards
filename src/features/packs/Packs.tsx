import {CircularProgress} from "@mui/material";
import {selectorAppStatus} from "app/app.selectors";
import {Btn, TypographyField} from "common/components";
import {CardsChanger} from "common/components/cards-changer/CardsCanger";
import {ClearFilterBtn} from "common/components/clear-filer-btn/ClearFilterBtn";
import {SearchInput} from "common/components/search-field/SearchInput";
import {SliderComponent} from "common/components/slider/Slider";
import {PacksTable} from "common/components/table/PacksTable";
import {useAppSelector} from "common/hooks";
import {Circular} from "common/styles";
import React from "react";
import {selectorPacks} from "./packs.selectors";

export const Packs = () => {
    const packs = useAppSelector(selectorPacks)
    const appStatus = useAppSelector(selectorAppStatus)
    let totalPacks = packs?.cardPacksTotalCount ? packs?.cardPacksTotalCount : 0


    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <TypographyField title={"Packs list"} style={{textAlign: "start"}}/>
                <Btn btnName={"Add new pack"}/>
            </div>

            {appStatus === "loading" ? (
                <Circular>
                    <CircularProgress/>
                </Circular>
            ) : (
                <div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                            <SearchInput/>
                            <CardsChanger/>
                            <SliderComponent totalPacks={totalPacks}/>
                            <ClearFilterBtn/>
                    </div>
                    {packs?.cardPacksTotalCount === 0 ? <div>No cards...</div> : <PacksTable/>}
                </div>
            )}
        </div>
    );
};
