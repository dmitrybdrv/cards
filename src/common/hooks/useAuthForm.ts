import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from 'common/validation-fields'
import { AuthTypes } from 'features/auth/auth.types'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const useAuthForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthTypes>({
        resolver: yupResolver(schema),
        mode: 'onTouched',
    })

    const onSubmit = (data: AuthTypes) => {
        console.log(data)
    }

    useEffect(() => {
        register('password')
        register('confirmPassword')
    }, [register])

    return { register, handleSubmit, errors, onSubmit }
}
