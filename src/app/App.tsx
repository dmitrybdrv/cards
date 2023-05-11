import LinearProgress from '@mui/material/LinearProgress/LinearProgress'
import { AppHeader } from 'common/components/app-header/AppHeader'
import { CircularLoader } from 'common/components/loader/CircularLoader'
import { useActions, useMainSelectors } from 'common/hooks'
import { authThunk } from 'features/auth'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
    const { appStatus, isAppInitialized } = useMainSelectors()
    const { authMe } = useActions(authThunk)

    useEffect(() => {
        authMe({})
    }, [])

    return (
        <>
            <AppHeader />
            {appStatus === 'loading' && <CircularLoader />}
            {isAppInitialized ? <LinearProgress /> : <Outlet />}
            {'всплывашки'}
        </>
    )
}

export default App
