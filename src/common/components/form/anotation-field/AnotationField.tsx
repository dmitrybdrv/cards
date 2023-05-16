import { Typography } from '@mui/material'
import React, { FC } from 'react'

type PropsType = {
    description?: string
}
/**
 * AnnotationField - компонент отображения дополнительной информации в текстовом виде
 * @param description - текст - описание чего либо в качестве аннотации
 */
export const AnnotationField: FC<PropsType> = ({ description }) => {
    return (
        <Typography mt={2} align={'center'} style={{ opacity: '0.6', marginBottom: '10px' }}>
            {description}
        </Typography>
    )
}
