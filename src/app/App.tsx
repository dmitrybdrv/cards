import { AppHeader } from 'common/components'
import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <>
            <AppHeader />
            <Outlet />
        </>
    )
}

export default App
