import { Typography } from '@mui/material'
import { Form } from 'common/components/form/Form'
import { PasswordInput } from 'common/components/form/passwordInput/PasswordInput'
import { useAuthForm } from 'common/hooks/useAuthForm'
import React, { FC } from 'react'

type PropsType = {}

export const CreateNewPassword: FC<PropsType> = ({}) => {
    const { errors, register, onSubmit, handleSubmit } = useAuthForm(['password'])
    return (
        <Form onSubmit={handleSubmit(onSubmit)} title={'Create new password'} btnName={'Create new password'}>
            <PasswordInput register={register} errors={errors} name={'password'} label={'Password'} />

            <Typography mt={2} align={'left'} style={{ opacity: '0.6', marginBottom: '10px' }}>
                <p>Create new password and we will send you further instructions to email</p>
            </Typography>
        </Form>
    )
}
