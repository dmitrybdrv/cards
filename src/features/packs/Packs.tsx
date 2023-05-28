import { packsApi } from 'features/packs/packs.api'
import React, { FC, useEffect, useState } from 'react'


export const Packs: FC = () => {
    const [init, setInit] = useState([{}])

    useEffect(() => {
        packsApi.getPacks()
            .then((res) => {
                console.log(res)
                setInit(res.data.cardPacks)
            })
    }, [])

    return (
        <div>
            <h3>Packs</h3>
            <div>
                {JSON.stringify(init.map(el => el))}
            </div>
        </div>
    )
}
