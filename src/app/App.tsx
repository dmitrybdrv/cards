import { LinearProgress } from '@mui/material'
import { AppHeader } from 'common/components'
import { Toasts } from 'common/components/toasts/Toasts'
import { useHelpSelectors } from 'common/hooks/useHelpSelectors'
import React from 'react'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    const { appStatus } = useHelpSelectors()
    return (
        <>
            <AppHeader />
            {appStatus === 'loading' && <LinearProgress />}
            <Outlet />
            <Toasts />
        </>
    )
}

export default App
