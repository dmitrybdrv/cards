import App from 'app/App'
import { ErrorPage } from 'common/components'
import { Auth } from 'common/components/auth-pages/Auth'
import { Main } from 'common/components/main-pages/Main'
import { path } from 'common/constants/path'
import { Login } from 'features/auth/components'
import React from 'react'
import { createHashRouter } from 'react-router-dom'

export const router = createHashRouter([
    {
        path: path.MAIN,
        element: <App />,
        errorElement: <ErrorPage />,

        children: [
            {
                path: path.MAIN,
                element: <Auth />,
                children: [
                    {
                        path: path.LOGIN,
                        element: <Login />,
                    },
                ],
            },
            {
                path: path.MAIN,
                element: <Main />,
                children: [],
            },
        ],
    },
])
