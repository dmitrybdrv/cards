import { Tab, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import React, {useEffect, useState} from "react";
import {useActions} from "../../hooks";
import {packsThunk, TabsType} from "../../../features/packs";

export const CardsChanger: React.FC<any> = ({}) => {
  const [value, setValue] = useState<TabsType>('All')
    const {getPacks} = useActions(packsThunk);

  const handleChange = (event: React.SyntheticEvent, newValue: TabsType) => setValue(newValue)

  useEffect(() => {
      if(value === 'My') {
          getPacks({user_id: '64551359c19c911fb48f5fb8'})
      } else if (value === 'All') {
          getPacks({})
      }
  }, [value])

  return (
    <Box sx={{ display: "grid", height: "100%" }}>
      <label>{"Show packs cards"}</label>

      <Tabs value={value} onChange={handleChange}>
        <Tab label={"My"} value={'My'}/>
        <Tab label={"All"} value={'All'}/>
      </Tabs>
    </Box>
  );
};
