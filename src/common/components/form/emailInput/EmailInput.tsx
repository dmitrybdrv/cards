import { TextField } from '@mui/material'
import { AuthTypes } from 'features/auth/auth.types'
import React, { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

type PropsType = {
    register: UseFormRegister<AuthTypes>
    errors: FieldErrors<AuthTypes>
    name: 'emailSignIn' | 'email'
}

export const EmailInput: FC<PropsType> = ({ register, errors, name }) => {
    return (
        <TextField
            {...register(name)}
            type={'text'}
            label={'Email'}
            error={!!errors[name]}
            variant='standard'
            margin={'normal'}
            helperText={`${errors[name] ? errors[name]?.message : ''}`}
        />
    )
}
