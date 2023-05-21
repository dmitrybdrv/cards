import React, { FC } from 'react'
import { Typography } from '@mui/material'
import {useNavigation} from 'common/hooks'
import { Form, PasswordInput } from 'common/components'
import { useAuthForm } from 'common/hooks/useAuthForm'

/**
 * CreateNewPassword - компонет - форма создания нового пароля
 */
export const CreateNewPassword: FC = () => {
    const { errors, register, handleSubmit, onCreateNewPass } = useAuthForm(['password'])
    useNavigation()
    return (
        <Form onSubmit={handleSubmit(onCreateNewPass)} title={'Create new password'} btnName={'Create new password'}>
            <PasswordInput register={register} errors={errors} name={'password'} label={'Password'} />

            <Typography mt={2} align={'left'} style={{ opacity: '0.6', marginBottom: '10px' }}>
                <p>Create new password and we will send you further instructions to email</p>
            </Typography>
        </Form>
    )
}
