import { CheckBox, EmailInput, Form, LinkTo, PasswordInput } from 'common/components'
import { useAuthForm } from 'common/hooks/useAuthForm'
import React, { FC } from 'react'

/**
 * SignIn - компонет логинизации в приложении
 */
export const SignIn: FC = () => {
    const { register, handleSubmit, errors, onLogin } = useAuthForm(['emailSignIn', 'passwordSignIn'])

    return (
        <Form
            title={'Sign in'}
            btnName={'Sign in'}
            onSubmit={handleSubmit(onLogin)}
            link={{ path: '/auth/register', name: 'Sign Up' }}
            description={'Don`t have an account?'}>
            <EmailInput register={register} errors={errors} name={'emailSignIn'} />

            <PasswordInput label={'Password'} register={register} errors={errors} name={'passwordSignIn'} />

            <CheckBox label={'Remember me'} register={register} name={'rememberMe'} />
            <LinkTo link={{ path: '/', title: 'Forgot password?' }} />
        </Form>
    )
}
