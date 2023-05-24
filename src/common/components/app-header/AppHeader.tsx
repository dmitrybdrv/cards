import { AppBar, Avatar, Toolbar, Typography } from '@mui/material'
import { Btn } from 'common/components/form/button/Btn'
import { useActions, useHelpingSelectors } from 'common/hooks'
import logo from 'common/image/logo.png'
import { authThunk } from 'features/auth'
import React, { FC } from 'react'
import { path } from 'common/utils'
import { ava } from 'common/image'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

/**
 * Компонент AppHeader, отображающий заголовок всего приложения.
 */
export const AppHeader: FC = () => {
    const { profile, isLoggedIn } = useHelpingSelectors()
    const { logout } = useActions(authThunk)
    return (
        <AppBar position='static' color={'default'}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Typography
                    variant='h6'
                    noWrap
                    component='a'
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textDecoration: 'none' }}>
                    <div style={{ width: '150px', marginLeft: '100px' }}>
                        <img src={logo} alt='app logo' />
                    </div>
                </Typography>
                {isLoggedIn
                    ? <div style={{ marginRight: '100px', display: 'flex', alignItems: 'center' }}>
                        <span style={{paddingRight: '10px'}}>{profile?.name}</span>
                        <Avatar alt='profile-avatar' src={ava} sx={{ width: 56, height: 56 }}>
                            <PermIdentityIcon/>
                        </Avatar>
                    </div>
                    :
                    <div style={{ marginRight: '100px' }}><Btn btnName={'LOGIN'} onButtonRedirect={path.LOGIN} /></div>}
            </Toolbar>
        </AppBar>
    )
}
