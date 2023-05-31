import { CircularProgress, Input } from '@mui/material'
import { selectorAppStatus } from 'app/app.selectors'
import { Btn, TypographyField } from 'common/components'
import { useActions, useAppSelector } from 'common/hooks'
import { Circular } from 'common/styles'
import { selectorPacks } from 'features/packs/packs.selectors'
import { packsThunk } from 'features/packs/packs.slice'
import React, { useEffect } from 'react'

export const Packs = () => {
    const appStatus = useAppSelector(selectorAppStatus)
    const packs = useAppSelector(selectorPacks)
    const { getPacks } = useActions(packsThunk)

    useEffect(() => {
        getPacks()
    }, [])

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TypographyField title={'Packs list'} style={{ textAlign: 'start', padding: '20px' }} />
                <Btn btnName={'Add new pack'} />
            </div>

            <div>
                {appStatus === 'loading' ? (
                    <Circular>
                        <CircularProgress />
                    </Circular>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )
}
