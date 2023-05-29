import { CircularProgress } from '@mui/material'
import { selectorAppStatus } from 'app/app.selectors'
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
            <h3>Packs</h3>
           <div>{appStatus === 'loading'
                    ?  <Circular><CircularProgress /></Circular>
                    :  packs ? packs.cardPacks.map(el => {
                    return (
                        <ul key={el._id}>
                            <li>{el.name}</li>
                        </ul>
                    )
                }): 'No any packs...'}</div>
        </div>
    )
}
