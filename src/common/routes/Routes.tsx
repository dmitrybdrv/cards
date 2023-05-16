import App from 'app/App'
import React from 'react'
import { createHashRouter } from 'react-router-dom'
import { AuthHoc } from 'common/components/authHoc/AuthHoc'
import { MainHoc } from 'common/components/authHoc/MainHoc'
import { ErrorPage } from 'common/components/error-page/ErrorPage'
import { CheckEmail } from 'features/auth/check-email/CheckEmail'
import { ForgotPassword } from 'features/auth/forgot-password/ForgotPassword'
import { CreateNewPassword } from 'features/auth/create-new-password/CreateNewPassword'
import { SignIn } from 'features/auth/sign-in/SignIn'
import { SignUp } from 'features/auth/sign-up/SignUp'
import { Cards } from 'features/cards/Cards'
import { Learn } from 'features/learn/Learn'
import { Packs } from 'features/packs/Packs'
import { Profile } from 'features/profile/Profile'

/**
 * router - роутинг всего приложения
 */
export const router = createHashRouter([
    {
        path: '/',
        element: <App />,

        children: [
            {
                path: '/',
                errorElement: <ErrorPage />,
            },
            {
                path: '/auth/',
                element: <AuthHoc />,
                children: [
                    {
                        path: '/auth/login',
                        element: <SignIn />,
                    },
                    {
                        path: '/auth/register',
                        element: <SignUp />,
                    },
                    {
                        path: '/auth/check-email',
                        element: <CheckEmail />,
                    },
                    {
                        path: '/auth/forgot-password',
                        element: <ForgotPassword />,
                    },
                    {
                        path: '/auth/create-new-password',
                        element: <CreateNewPassword />,
                    },
                ],
            },
            {
                path: '/',
                element: <MainHoc />,
                children: [
                    {
                        path: '/packs',
                        element: <Packs />, //колоды
                    },
                    {
                        path: '/profile',
                        element: <Profile />,
                    },
                    {
                        path: '/cards',
                        element: <Cards />,
                    },
                    {
                        path: '/learn',
                        element: <Learn />,
                    },
                ],
            },
        ],
    },
])
