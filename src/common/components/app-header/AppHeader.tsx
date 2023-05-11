import { AppBar } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import logo from 'common/image/logo.png'
import React, { FC } from 'react'

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
