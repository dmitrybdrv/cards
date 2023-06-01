import { Grid } from '@mui/material'
import React, { ReactNode } from 'react'

type PropsType = {
    children: ReactNode
}
/**
 * Layout - компонент обёртка для центрирования содержимого контента всего приложения
 * @param children - Оборачиваемые компоненты
 */
export const Layout: React.FC<PropsType> = ({ children }) => {
    return (
        <Grid container style={{ justifyContent: 'center', background: '#b2bbb2', height: '90vh' }}>
            <Grid item xs={8} style={{ background: '#ece8e8' }}>
                {children}
            </Grid>
        </Grid>
    )
}
