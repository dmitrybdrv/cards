import { CircularProgress, LinearProgress } from '@mui/material'
import { Circular } from 'common/styles'
import { authThunk } from 'features/auth'
import React, { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from 'react-router-dom'
import { useActions, useHelpingSelectors } from 'common/hooks'
import { AppHeader, Toasts } from 'common/components'

/**
 * Компонент App, отображающий заголовок приложения, индикаторы загрузки и содержимое маршрутов.
 */
export default function App() {
    const { appStatus, appInitializing } = useHelpingSelectors()
    const { authMe } = useActions(authThunk)

    useEffect(() => {
        authMe({})
    }, [])

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
