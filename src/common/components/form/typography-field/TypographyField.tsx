import { Typography } from '@mui/material'
import React, { FC } from 'react'

type PropsType = {
    title: string
    style?:  React.CSSProperties
}
/**
 * TypographyField - заголовок текста (h2)
 * @param title - параметр заголовка текста
 * @param style - параметр стиля текста (опционально)
 */
export const TypographyField: FC<PropsType> = ({ title, style }) => {
    const defaultStyle: React.CSSProperties = {
        fontFamily: 'Poppins',
        fontSize: '26px',
        textAlign: 'center',
        marginBottom: '10px',
        ...style
    }

    return (
        <Typography
            component={'h2'}
            style={defaultStyle}>
            {title}
        </Typography>
    )
}
