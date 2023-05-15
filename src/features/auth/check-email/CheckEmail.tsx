import { Typography } from '@mui/material'
import { Form } from 'common/components/form/Form'
import { useAuthForm } from 'common/hooks/useAuthForm'
import React, { FC } from 'react'
import { checkMail } from 'common/image'

export const CheckEmail: FC = () => {
    const { handleSubmit, onSubmit } = useAuthForm(['emailSignIn', 'passwordSignIn'])

    return (
        <Form
            title={'Check Email'}
            btnName={'Back to login'}
            onSubmit={handleSubmit(onSubmit)}
            onButtonRedirect={'#/auth/login'}>
            <img
                src={checkMail}
                alt='check-email'
                style={{ borderRadius: '50%', width: '100px', alignSelf: 'center' }}
            />
            <Typography mt={2} align={'center'} style={{ opacity: '0.6', marginBottom: '10px' }}>
                <p>We`ve sent an Email with instructions to xxxxxxxxxxx</p>
            </Typography>
        </Form>
    )
}
