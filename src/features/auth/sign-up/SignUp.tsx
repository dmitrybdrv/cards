import { yupResolver } from '@hookform/resolvers/yup'
import { EmailInput } from 'common/components/form/emailInput/EmailInput'
import { Form } from 'common/components/form/Form'
import { PasswordInput } from 'common/components/form/passwordInput/PasswordInput'
import { schema } from 'common/validation-fields'
import { AuthTypes } from 'features/auth/auth.types'
import React, { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

type PropsType = {}

export const SignUp: FC<PropsType> = ({}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<AuthTypes>({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
        mode: 'onTouched',
    })
    const onSubmit = (data: AuthTypes) => {}

    useEffect(() => {
        register('password')
        register('confirmPassword')
    }, [register])

    return (
        <Form
            title={'Sign up'}
            btnName={'Sign Up'}
            link={{ path: '/auth/login', name: 'Sign In' }}
            onSubmit={handleSubmit(onSubmit)}
            description={'Already have an account?'}>
            <EmailInput name={'email'} errors={errors} register={register} />

            <PasswordInput label={'Password'} name={'password'} errors={errors} register={register} />

            <PasswordInput label={'Confirm password'} name={'confirmPassword'} errors={errors} register={register} />
        </Form>
    )
}
