import { CircularProgress, LinearProgress } from '@mui/material'
import { Layout } from 'common/components/layout/Layout'
import { useToasts } from 'common/hooks/useToasts'
import { Circular } from 'common/styles'
import { authThunk } from 'features/auth'
import React, { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useActions, useHelpingSelectors } from 'common/hooks'
import { AppHeader, Toasts } from 'common/components'
import { Outlet } from 'react-router-dom'

/**
 * Компонент App, отображающий заголовок приложения, индикаторы загрузки и содержимое маршрутов.
 */
export default function App() {
    const { appStatus, appInitializing } = useHelpingSelectors()
    const { authMe } = useActions(authThunk)
    useToasts()
    
    useEffect(() => {
        authMe({})
    }, [])
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
