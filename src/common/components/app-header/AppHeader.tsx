import { AppBar, Toolbar, Typography } from '@mui/material'
import { Btn } from 'common/components/form/button/Btn'
import { useActions, useHelpingSelectors } from 'common/hooks'
import logo from 'common/image/logo.png'
import { authThunk } from 'features/auth'
import React, { FC } from 'react'
import { path } from 'common/utils'

/**
 * Компонент AppHeader, отображающий заголовок всего приложения.
 */
export const AppHeader: FC = () => {
    const { profile, isLoggedIn } = useHelpingSelectors()
    const { logout } = useActions(authThunk)
    const profileEmail = profile?.email ? profile?.email : 'Incorrect data'
    return (
        <AppBar position='static' color={'default'}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
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
                {isLoggedIn
                    ? <Btn btnName={profileEmail} callBack={logout}/>
                    : <Btn btnName={'SignIN'} onButtonRedirect={path.LOGIN}/>}
            </Toolbar>
        </AppBar>
    )
}
