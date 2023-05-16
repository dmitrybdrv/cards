import { Typography } from '@mui/material'
import React, { FC } from 'react'

type PropsType = {
    title: string
}
/**
 * TypographyField - заголовок текста (h2)
 * @param title - параметр заголовка текста
 */
export const TypographyField: FC<PropsType> = ({ title }) => {
    return (
        <Typography
            component={'h2'}
            style={{
                fontFamily: 'PoppinsMedium',
                fontSize: '26px',
                textAlign: 'center',
                marginBottom: '10px',
            }}>
            {title}
        </Typography>
    )
}
