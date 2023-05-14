import { Checkbox, FormControlLabel } from '@mui/material'
import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

type PropsType = {
    //TODO пофиксить типы
    label: string
    register: UseFormRegister<any>
    name: string
}

export const CheckBox: FC<PropsType> = ({ label, register, name }) => {
    return (
        <FormControlLabel
            control={<Checkbox {...register(name)} />}
            label={label}
            style={{ margin: '20px 0', width: 'fit-content' }}
        />
    )
}
