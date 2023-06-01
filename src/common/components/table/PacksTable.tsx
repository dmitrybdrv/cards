import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useAppSelector } from "common/hooks";
import { selectorPacks } from "features/packs/packs.selectors";
import React from "react";

export const PacksTable = () => {
  const packs = useAppSelector(selectorPacks);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ background: "#d2cece" }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Cards</TableCell>
            <TableCell align="right">Last Update</TableCell>
            <TableCell align="right">Create by</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {packs?.cardPacks.map((pack) => {
            const updateDate = new Date(pack.updated);
            const stringDate = updateDate.toLocaleString("ru-RU", { dateStyle: "short" });

            return (
              <TableRow key={pack._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {pack.name}
                </TableCell>
                <TableCell align="right">{pack.cardsCount}</TableCell>
                <TableCell align="right">{stringDate}</TableCell>
                <TableCell align="right">{pack.name}</TableCell>
                <TableCell align="right">zzzz</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
