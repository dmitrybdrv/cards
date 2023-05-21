import { Typography } from '@mui/material'
import { Form } from 'common/components/form/Form'
import { useAuthForm } from 'common/hooks/useAuthForm'
import React, { FC } from 'react'
import { checkMail } from 'common/image'

/**
 * CheckEmail - компонент - форма проверки почты (подтвержение отправленной инструкции на почтовый ящик)
 */
export const CheckEmail: FC = () => {
    const { handleSubmit } = useAuthForm(['emailSignIn', 'passwordSignIn'])

    return (
        <Form title={'Check Email'} btnName={'Back to login'} onSubmit={() => {}} onButtonRedirect={'#/auth/login'}>
            <img
                src={checkMail}
                alt='check-email'
                style={{ borderRadius: '50%', width: '100px', alignSelf: 'center' }}
            />
            <Typography mt={2} align={'center'} style={{ opacity: '0.6', marginBottom: '10px' }}>
                We`ve sent an Email with instructions to xxxxxxxxxxx
            </Typography>
        </Form>
    )
}
