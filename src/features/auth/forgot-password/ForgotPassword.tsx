import { EmailInput, Form } from 'common/components'
import { useAuthForm } from 'common/hooks/useAuthForm'
import {useNavigation} from 'common/hooks/useNavigation'
import React, { FC } from 'react'

/**
 * ForgotPassword - компонет отправки инструкции по восстановлению пароля
 */
export const ForgotPassword: FC = () => {
    const { errors, register, handleSubmit, onAuthForgot } = useAuthForm(['email'])

    useNavigation()
    return (
        <Form
            onSubmit={handleSubmit(onAuthForgot)}
            title={'Forgot your password?'}
            btnName={'Send instructions'}
            description={'Enter your Email address and we will send you further instructions'}
            link={{ path: '/auth/login', name: 'Try logging in' }}>

            <EmailInput register={register} errors={errors} name={'email'} />
        </Form>
    )
}
