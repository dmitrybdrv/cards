import { CircularProgress } from "@mui/material";
import { selectorAppStatus } from "app/app.selectors";
import { Btn, TypographyField } from "common/components";
import { CardsChanger } from "common/components/cards-changer/CardsCanger";
import { ClearFilterBtn } from "common/components/clear-filer-btn/ClearFilterBtn";
import { SearchInput } from "common/components/search-field/SearchInput";
import { SliderComponent } from "common/components/slider/Slider";
import { PacksTable } from "common/components/table/PacksTable";
import { useActions, useAppSelector } from "common/hooks";
import { Circular } from "common/styles";
import { packsThunk } from "features/packs/packs.slice";
import React, { useEffect, useState } from "react";

export const Packs = () => {
  const appStatus = useAppSelector(selectorAppStatus);
  const { getPacks } = useActions(packsThunk);

  const [val, setValue] = useState("");

  useEffect(() => {
    getPacks();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TypographyField title={"Packs list"} style={{ textAlign: "start" }} />
        <Btn btnName={"Add new pack"} />
      </div>

      {appStatus === "loading" ? (
        <Circular>
          <CircularProgress />
        </Circular>
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <SearchInput
                onChange={e => {
                  setValue(e);
                }} value={val} />
            </div>
            <div>
              <CardsChanger />
            </div>
            <div>
              <SliderComponent />
            </div>
            <div>
              <ClearFilterBtn />
            </div>
          </div>
          <PacksTable />
        </div>
      )}
    </div>
  );
};
