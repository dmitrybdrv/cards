import App from 'app/App'
import { path } from 'common/utils'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AuthHoc, ErrorPage, MainHoc } from 'common/components'
import { CheckEmail, CreateNewPassword, ForgotPassword, SignIn, SignUp } from 'features/auth'
import { Cards } from 'features/cards/Cards'
import { Learn } from 'features/learn/Learn'
import { Packs } from 'features/packs/Packs'
import { Profile } from 'features/profile/Profile'

/**
 * router - роутинг всего приложения
 */
export const router = createBrowserRouter([
    {
        path: path.MAIN,
        element: <App />,
        children: [
            {
                path: path.MAIN,
                errorElement: <ErrorPage />,
            },
            {
                path: path.AUTH,
                element: <AuthHoc />,
                children: [
                    {
                        path: path.LOGIN,
                        element: <SignIn />,
                    },
                    {
                        path: path.REGISTER,
                        element: <SignUp />,
                    },
                    {
                        path: path.CHECK_EMAIL,
                        element: <CheckEmail />,
                    },
                    {
                        path: path.FORGOT_PASSWORD,
                        element: <ForgotPassword />,
                    },
                    {
                        path: path.CREATE_NEW_PASSWORD,
                        element: <CreateNewPassword />,
                    },
                ],
            },
            {
                path: path.MAIN,
                element: <MainHoc />,
                children: [
                    {
                        path: path.PACKS,
                        element: <Packs />, //колоды
                    },
                    {
                        path: path.PROFILE,
                        element: <Profile />,
                    },
                    {
                        path: path.CARDS,
                        element: <Cards />,
                    },
                    {
                        path: path.LEARN,
                        element: <Learn />,
                    },
                ],
            },
        ],
    },
])