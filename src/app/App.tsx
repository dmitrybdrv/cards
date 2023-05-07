import { AppBar } from '@mui/material'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import style from 'app/App.module.css'
import { selectProfile } from 'app/app.selector'
import { useActions } from 'common/hooks'
import { useAppSelector } from 'common/hooks/useAppSelector'
import logo from 'common/image/logo.png'
import { authThunk } from 'features/auth/auth.slice'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
    const profile = useAppSelector(selectProfile)
    const { isAuthMe } = useActions(authThunk)

    useEffect(() => {
        if (profile) {
        }
    }, [])

    return (
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
                            <Button variant={'contained'} size={'small'}>
                                LogIN
                            </Button>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Outlet />
        </div>
    )
}

export default App
