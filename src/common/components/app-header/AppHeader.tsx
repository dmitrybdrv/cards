import { AppBar, Toolbar, Typography } from '@mui/material'
import logo from 'common/image/logo.png'
import React, { FC } from 'react'

/**
 * Компонент AppHeader, отображающий заголовок всего приложения.
 */
export const AppHeader: FC = () => {
    return (
        <AppBar position='static' color={'default'}>
            <Toolbar>
                <Typography
                    variant='h6'
                    noWrap
                    component='a'
                    href='/'
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textDecoration: 'none' }}>
                    <div style={{ width: '150px', marginLeft: '100px' }}>
                        <img src={logo} alt='app logo' />
                    </div>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
