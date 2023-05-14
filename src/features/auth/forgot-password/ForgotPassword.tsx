import { EmailInput } from 'common/components/form/emailInput/EmailInput'
import { Form } from 'common/components/form/Form'
import { useAuthForm } from 'common/hooks/useAuthForm'
import React, { FC } from 'react'

export const ForgotPassword: FC = () => {
    const { errors, register, onSubmit, handleSubmit } = useAuthForm()
    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            title={'Forgot your password?'}
            btnName={'Send instructions'}
            description={'Enter your Email address and we will send you further instructions'}
            link={{ path: '/auth/login', name: 'Try logging in' }}>
            <EmailInput register={register} errors={errors} name={'email'} />
        </Form>
    )
}
