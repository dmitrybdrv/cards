import { CircularProgress, LinearProgress } from '@mui/material'
import { Circular } from 'common/styles'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from 'react-router-dom'
import { useHelpingSelectors } from 'common/hooks'
import { AppHeader, Toasts } from 'common/components'

/**
 * Компонент App, отображающий заголовок приложения, индикаторы загрузки и содержимое маршрутов.
 */
export default function App() {
    const { appStatus, appInitializing } = useHelpingSelectors()
    return (
        <>
            <AppHeader />
            {appInitializing ? <LinearProgress /> : <Outlet />}
            {appStatus === 'loading' && (
                <Circular>
                    <CircularProgress />
                </Circular>
            )}
            <Toasts />
        </>
    )
}
