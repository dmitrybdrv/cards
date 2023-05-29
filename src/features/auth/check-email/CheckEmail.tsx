import { selectorAppInfo } from 'app'
import { selectorAuthInfo } from 'features/auth/auth.selector'
import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { Form } from 'common/components/form/Form'
import { checkMail } from 'common/image'
import { path } from 'common/utils'
import { useActions, useAppSelector } from 'common/hooks'
import { authActions } from '../auth.slice'

/**
 * CheckEmail - компонент - форма проверки почты (подтвержение отправленной инструкции на почтовый ящик)
 */
export const CheckEmail: FC = () => {
    const appInfo = useAppSelector(selectorAppInfo)
    const {authClearInfo} =useActions(authActions)

    return (
        <Form title={'Check Email'} btnName={'Back to login'} onSubmit={() => authClearInfo()} onButtonRedirect={path.LOGIN}>
            <img
                src={checkMail}
                alt='check-email'
                style={{ borderRadius: '50%', width: '100px', alignSelf: 'center' }}
            />
            <Typography mt={2} align={'center'} style={{ opacity: '0.6', marginBottom: '10px' }}>
                We`ve sent an Email with instructions to <br /> {appInfo ? appInfo : 'your email'}
            </Typography>
        </Form>
    )
}
