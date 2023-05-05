import App from 'app/App'
import { store } from 'app/store'
import { ErrorPage } from 'common/components/error-page/ErrorPage'
import { CheckEmail } from 'features/auth/forgot-password/check-email/CheckEmail'
import { ForgotPassword } from 'features/auth/forgot-password/forgot-pass/ForgotPassword'
import { SetNewPassword } from 'features/auth/forgot-password/set-new-password/setNewPassword'
import { Login } from 'features/auth/login/Login'
import { Profile } from 'features/auth/profile/Profile'
import { Register } from 'features/auth/register/Register'
import { Cards } from 'features/cards/Cards'
import { Learn } from 'features/cards/learn/Learn'
import { Packs } from 'features/packs/Packs'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from 'routes/root'
import reportWebVitals from './reportWebVitals'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
    },

    {
        path: '/registration',
        element: <Register />,
    },

    {
        path: '/login',
        element: <Login />,
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

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
