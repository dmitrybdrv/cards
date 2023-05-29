import { CheckBox, EmailInput, Form, LinkTo, PasswordInput } from 'common/components'
import { useAuthForm } from 'common/hooks/useAuthForm'
import React from 'react'

/**
 * SignIn - компонет логинизации в приложении
 */
export const SignIn = () => {
    const { register, handleSubmit, errors, disabledButton, onLogin } = useAuthForm(['emailSignIn', 'passwordSignIn'])


    return (
        <Form
            title={'Sign in'}
            btnName={'Sign in'}
            onSubmit={handleSubmit(onLogin)}
            link={{ path: '/auth/register', name: 'Sign Up' }}
            description={'Don`t have an account?'}
            disabledButton={disabledButton}
        >
            <EmailInput register={register} errors={errors} name={'emailSignIn'} />

            <PasswordInput label={'Password'} register={register} errors={errors} name={'passwordSignIn'} />

            <CheckBox label={'Remember me'} register={register} name={'rememberMe'} />
            <LinkTo link={{ path: '/auth/forgot-password', title: 'Forgot password?' }}
                    style={{
                        marginBottom: '20px',
                        width: 'fit-content',
                        alignSelf: 'flex-end',
                        textDecoration: 'none',
                        color: '#000',
                        fontWeight: '500'
                    }} />
        </Form>
    )
}
//TODO обернуть необходимые функции в useCallBack и memo