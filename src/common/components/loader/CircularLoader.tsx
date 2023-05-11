import { CircularProgress } from '@mui/material'
import React, { FC } from 'react'

export const CircularLoader: FC = () => {
    return (
        <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
            <CircularProgress />
        </div>
    )
}
