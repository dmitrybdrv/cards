import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { AuthTypes } from 'features/auth/auth.types'
import React, { FC, useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

type PropsType = {
    register: UseFormRegister<AuthTypes>
    errors: FieldErrors<AuthTypes>
    name: 'password'
}

export const PasswordInput: FC<PropsType> = ({ name, errors, register }) => {
    const [showPassword, setShowPassword] = useState(false)
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <TextField
            label='Password'
            variant='standard'
            margin={'normal'}
            error={!!errors[name]}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={handleTogglePasswordVisibility}>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            {...register(name)}
            helperText={`${errors[name] ? errors[name]?.message : ''}`}
        />
    )
}
