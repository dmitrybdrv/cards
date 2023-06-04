import {CircularProgress} from "@mui/material";
import {selectorAppStatus} from "app/app.selectors";
import {Btn, TypographyField} from "common/components";
import {CardsChanger} from "common/components/cards-changer/CardsCanger";
import {ClearFilterBtn} from "common/components/clear-filer-btn/ClearFilterBtn";
import {SearchInput} from "common/components/search-field/SearchInput";
import {SliderComponent} from "common/components/slider/SliderComponent";
import {PacksTable} from "common/components/table/PacksTable";
import {useActions, useAppSelector} from "common/hooks";
import {Circular} from "common/styles";
import React, {useCallback, useEffect, useState} from "react";
import PagePagination from "../../common/components/page-pagination/PagePagination";
import {packsThunk} from "./packs.slice";
import _ from "lodash";
import {TabsType} from "./packs.types";

export const Packs = () => {
    const packs = useAppSelector(state => state.packs)
    const appStatus = useAppSelector(selectorAppStatus)
    const {getPacks} = useActions(packsThunk)
    const maxCardsCount = packs.packsData?.maxCardsCount
    const packsTotalCount = packs.packsData?.cardPacksTotalCount

    //SearchInput
    const [searchValue, setSearchValue] = useState('')
    const debouncedSearch = useCallback(_.debounce((searchValue: string) => {
        getPacks({packName: searchValue})
    }, 600), [])
    //CardsChanger
    const [cardsValue, setCardsValue] = useState<TabsType>('All')
    const onCardsChanger = (userId: { user_id: string }) => getPacks(userId)
    //SliderComponent
    const initialState = [0, maxCardsCount]
    const [sliderValue, setSliderValue] = useState<number[] | any>(initialState)
    useEffect(() => {
        setSliderValue(initialState)
    }, [maxCardsCount])
    //ClearFilterBtn
    const onClearFilters = () => {
        setSearchValue('')
        setCardsValue('All')
        setSliderValue(initialState)
        getPacks({packName: '', min: initialState[0], max: initialState[1]})
    }



    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <TypographyField title={"Packs list"} style={{textAlign: "start"}}/>
                <Btn btnName={"Add new pack"}/>
            </div>

            {
                appStatus === "loading"
                    ? <Circular><CircularProgress/></Circular>
                    : <div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <SearchInput value={searchValue} onChange={setSearchValue} debouncedSearch={debouncedSearch}/>
                            <CardsChanger cardsValue={cardsValue} setCardsValue={setCardsValue}
                                          onCardsChanger={onCardsChanger}/>
                            {maxCardsCount && <SliderComponent sliderValue={sliderValue} setSliderValue={setSliderValue}
                                                               maxCardsCount={maxCardsCount}/>}
                            <ClearFilterBtn onClearFilters={onClearFilters}/>
                        </div>
                        {!packs?.packsData?.cardPacksTotalCount
                            ? <div>No cards...</div>
                            : <div>
                                <PacksTable/>
                                {packsTotalCount && <PagePagination packsTotalCount={packsTotalCount}/>}
                            </div>}
                    </div>
            }
        </div>
    );
};
