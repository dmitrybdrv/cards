import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { AuthTypes } from 'features/auth'
import React, { FC, useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

type PropsType = {
    label: string
    register: UseFormRegister<AuthTypes>
    errors: FieldErrors<AuthTypes>
    name: 'passwordSignUp' | 'confirmPassword' | 'passwordSignIn' | 'password'
}
/**
 * Компонент PasswordInput, используется для поля формы и связывания его со значением password / пароль.
 */
export const PasswordInput: FC<PropsType> = ({ name, errors, register, label }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const handleTogglePasswordVisibility = () => setShowPassword(!showPassword)

    return (
        <TextField
            label={label}
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
