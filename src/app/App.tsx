import { AppBar } from '@mui/material'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import style from 'app/App.module.css'
import { ErrorPage } from 'common/components/error-page/ErrorPage'
import logo from 'common/image/logo.png'
import { CheckEmail } from 'features/auth/forgot-password/check-email/CheckEmail'
import { ForgotPassword } from 'features/auth/forgot-password/forgot-pass/ForgotPassword'
import { SetNewPassword } from 'features/auth/forgot-password/set-new-password/setNewPassword'
import { Login } from 'features/auth/login/Login'
import { Register } from 'features/auth/register/Register'
import { Cards } from 'features/cards/Cards'
import { Learn } from 'features/learn/Learn'
import { Packs } from 'features/packs/Packs'
import { Profile } from 'features/profile/Profile'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from 'routes/root'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
    },

    {
        path: '/login',
        element: <Login />,
    },

    {
        path: '/registration',
        element: <Register />,
    },

    {
        path: '/check-email',
        element: <CheckEmail />,
    },

    {
        path: '/set-new-password',
        element: <SetNewPassword />,
    },

    {
        path: '/forgot-password',
        element: <ForgotPassword />,
    },

    {
        path: '/profile',
        element: <Profile />,
    },

    {
        path: '/packs',
        element: <Packs />,
    },

    {
        path: '/cards',
        element: <Cards />,
    },

    {
        path: '/learn',
        element: <Learn />,
    },
])

function App() {
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
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
