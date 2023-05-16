import { Checkbox, FormControlLabel } from '@mui/material'
import { AuthTypes } from 'features/auth'
import React, { FC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type PropsType = {
    label: string
    register: UseFormRegister<AuthTypes & FieldValues>
    name: string
}

/**
 * CheckBox - компонент, используется для регистрации поля формы и связывания его со значением чекбокса.
 */
export const CheckBox: FC<PropsType> = ({ label, register, name }) => {
    return (
        <FormControlLabel
            control={<Checkbox {...register(name)} />}
            label={label}
            style={{ margin: '20px 0', width: 'fit-content' }}
        />
    )
}
