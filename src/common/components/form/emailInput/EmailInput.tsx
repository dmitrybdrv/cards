import { TextField } from '@mui/material'
import React, { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

type PropsType = {
    //TODO пофиксить типы
    register: UseFormRegister<any>
    errors: FieldErrors<any>
    name: string
}

export const EmailInput: FC<PropsType> = ({ register, errors, name }) => {
    return (
        <TextField
            label={'Email'}
            variant='standard'
            margin={'normal'}
            helperText={`${errors[name] ? errors[name]?.message : ''}`}
            {...register(name)}
        />
    )
}
