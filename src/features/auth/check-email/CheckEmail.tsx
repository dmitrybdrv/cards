import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from 'common/components/form/Form'
import { AuthTypes } from 'features/auth/auth.types'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

export const CheckEmail: FC = () => {
    /* const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthTypes>({
        resolver: yupResolver(schema),
        mode: 'onTouched',
    })
    const submit = (data: AuthTypes) => {
        console.log('zsczsc')
    }*/
    return <div></div> /*<Form title={'Check Email'} btnName={'Back to login'} onSubmit={handleSubmit(submit)}></Form>*/
}
