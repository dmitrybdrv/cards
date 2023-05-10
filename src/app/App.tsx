import { AppBar, CircularProgress } from '@mui/material'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import style from 'app/App.module.css'
import { selectAppStatus, selectIsAppInitialized } from 'app/app.selector'
import { useActions } from 'common/hooks'
import { useAppSelector } from 'common/hooks/useAppSelector'
import logo from 'common/image/logo.png'
import { authApi } from 'features/auth/auth.api'
import { selectIsLoggedIn } from 'features/auth/auth.selector'
import { authThunk } from 'features/auth/auth.slice'
import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

function App() {
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const isInitialized = useAppSelector(selectIsAppInitialized)
    const statusApp = useAppSelector(selectAppStatus)

    const { isAuthMe, logout } = useActions(authThunk)
    const navigate = useNavigate()

    useEffect(() => {
        isAuthMe({})
        if (!isLoggedIn) {
            navigate('/login')
        }
    }, [])

    return !isInitialized ? (
        <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
            {' '}
            <CircularProgress />{' '}
        </div>
    ) : (
        <div className={style.app}>
            <AppBar position='static' color={'default'}>
                <Toolbar>
                    <Typography
                        className={style.toolbar}
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            textDecoration: 'none',
                        }}>
                        <div className={style.appLogo}>
                            <img src={logo} alt='app logo' />
                        </div>
                        <div>
                            {isLoggedIn ? (
                                <Button variant={'contained'} size={'small'} onClick={(e) => logout({})}>
                                    LOGOUT
                                </Button>
                            ) : (
                                ''
                            )}
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={style.appContent}>
                <Outlet />
            </div>
        </div>
    )
}

export default App
