import { CircularProgress, LinearProgress } from '@mui/material'
import { selectorAppInitializing, selectorAppStatus } from 'app/app.selectors'
import { Layout } from 'common/components/layout/Layout'
import { useToasts } from 'common/hooks/useToasts'
import { Circular } from 'common/styles'
import { authThunk } from 'features/auth'
import React, { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useActions, useAppSelector } from 'common/hooks'
import { AppHeader, Toasts } from 'common/components'
import { Outlet } from 'react-router-dom'

/**
 * Компонент App, отображающий заголовок приложения, индикаторы загрузки и содержимое маршрутов.
 */
export default function App() {
    const appStatus = useAppSelector(selectorAppStatus)
    const appInitializing = useAppSelector(selectorAppInitializing)
    const { authMe } = useActions(authThunk)

    useEffect(() => {
        authMe({})
    }, [])

    useToasts()

    return appInitializing ? (
        <>
            <AppHeader />
            {appStatus === 'loading' ? <LinearProgress /> : <Layout><Outlet /></Layout>}
            <Toasts />
        </>
    ) : (
        <Circular>
            <CircularProgress />
        </Circular>
    )
}

