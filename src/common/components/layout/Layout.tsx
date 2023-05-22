import { Grid } from '@mui/material'
import React, { ReactNode } from 'react'

type PropsType ={
    children: ReactNode
}
/**
 * Layout - компонент обёртка для центрирования содержимого контента всего приложения
 * @param children - Оборачиваемые компоненты
 */
export const Layout: React.FC<PropsType> = ({children}) => {
    return (
        <Grid container spacing={3} style={{marginTop: '0px'}} justifyContent={'center'}>
            <Grid item xs={8}>
                {children}
            </Grid>
        </Grid>
    )
}