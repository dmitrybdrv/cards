import { EmailInput } from 'common/components/form/emailInput/EmailInput'
import { Form } from 'common/components/form/Form'
import { PasswordInput } from 'common/components/form/passwordInput/PasswordInput'
import { useAuthForm } from 'common/hooks/useAuthForm'
import React, { FC } from 'react'

export const SignUp: FC = () => {
    const { register, handleSubmit, errors, onSubmit } = useAuthForm(['email', 'password'])

    return (
        <Form
            title={'Sign up'}
            btnName={'Sign Up'}
            onSubmit={handleSubmit(onSubmit)}
            link={{ path: '/auth/login', name: 'Sign In' }}
            description={'Already have an account?'}>
            <EmailInput name={'email'} errors={errors} register={register} />

            <PasswordInput label={'Password'} name={'password'} errors={errors} register={register} />

            <PasswordInput label={'Confirm password'} name={'confirmPassword'} errors={errors} register={register} />
        </Form>
    )
}
