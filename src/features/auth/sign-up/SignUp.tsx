import { EmailInput, Form, PasswordInput } from 'common/components'
import { useNavigation } from 'common/hooks'
import { useAuthForm } from 'common/hooks/useAuthForm'
import React, { FC } from 'react'

/**
 * SignUp - компонент - регистрация пользователя
 */
export const SignUp: FC = () => {
    const { register, handleSubmit, errors, onSubmit } = useAuthForm([
        'emailSignUp',
        'passwordSignUp',
        'confirmPassword',
    ])

    useNavigation()
    return (
        <Form
            title={'Sign up'}
            btnName={'Sign Up'}
            onSubmit={handleSubmit(onSubmit)}
            link={{ path: '/auth/login', name: 'Sign In' }}
            description={'Already have an account?'}>
            <EmailInput name={'emailSignUp'} errors={errors} register={register} />
            <PasswordInput label={'Password'} name={'passwordSignUp'} errors={errors} register={register} />
            <PasswordInput label={'Confirm password'} name={'confirmPassword'} errors={errors} register={register} />
        </Form>
    )
}
