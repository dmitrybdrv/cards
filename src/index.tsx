import App from 'app/App'
import { store } from 'app/store'
import { ErrorPage } from 'common/components/error-page/ErrorPage'
import { CheckEmail } from 'features/auth/components/check-email/CheckEmail'
import { ForgotPassword } from 'features/auth/components/forgot-pass/ForgotPassword'
import { SetNewPassword } from 'features/auth/components/set-new-password/setNewPassword'
import { Login } from 'features/auth/components/login/Login'
import { Profile } from 'features/auth/components/profile/Profile'
import { Register } from 'features/auth/components/register/Register'
import { Cards } from 'features/cards/Cards'
import { Learn } from 'features/cards/learn/Learn'
import { Packs } from 'features/packs/Packs'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/profile',
                element: <Profile />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/auth',
                element: <Register />,
            },
        ],
    },
])

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
