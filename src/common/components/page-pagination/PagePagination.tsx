import React, {FC} from 'react';
import {Pagination} from "@mui/material";

type PropsType = {
    packsTotalCount: number
}

export const PagePagination: FC<PropsType> = ({ packsTotalCount }) => {
    const totalPage = Math.ceil(packsTotalCount/4)

    return (
        <Pagination count={totalPage} />
        )
}

export default PagePagination;