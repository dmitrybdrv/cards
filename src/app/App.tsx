import { AppBar } from '@mui/material'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import style from 'app/App.module.css'
import { useActions } from 'common/hooks'
import { useAppSelector } from 'common/hooks/useAppSelector'
import logo from 'common/image/logo.png'
import { selectisLoggedIn } from 'features/auth/auth.selector'
import { authThunk } from 'features/auth/auth.slice'
import React from 'react'

function App() {
    const isLoggedIn = useAppSelector(selectisLoggedIn)
    const { logout } = useActions(authThunk)
    const ava = require('common/image/ava.png')

    const logOutHandler = () => {
        logout()
    }

    return (
        <div className={style.app}>
            <AppBar position='static' color={'default'}>
                <Toolbar className={style.toolbar}>
                    <Typography
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
                    </Typography>
                    {isLoggedIn && (
                        <div className={style.toolbarInfo}>
                            <div>
                                <img src={ava} alt='alternAva' />
                            </div>

                            <div>
                                <Button color='inherit' onClick={logOutHandler}>
                                    LOGOUT
                                </Button>
                            </div>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            {/*{!isAppInitialized && <LinearProgress color='primary' />}*/}
        </div>
    )
}

export default App
