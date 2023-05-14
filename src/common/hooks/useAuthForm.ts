import { yupResolver } from '@hookform/resolvers/yup'
import { AuthTypes } from 'features/auth/auth.types'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ref, string } from 'yup'
import * as yup from 'yup'

type ValidateFieldsType = 'email' | 'emailSignIn' | 'password' | 'passwordSignIn' | 'confirmPassword'

export const useAuthForm = (validateFields: ValidateFieldsType[]) => {
    const getFields = (fields: ValidateFieldsType[]) => {
        let scheme = yup.object({})
        for (let i = 0; i < fields.length; i++) {
            if (fields[i] === 'email') {
                scheme = yup.object({
                    email: string()
                        .email('Must be valid email')
                        .required('Title is required')
                        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Invalid email format'),
                })
            }
            if (fields[i] === 'emailSignIn') {
                scheme = yup.object({
                    emailSignIn: string()
                        .email('Must be valid email')
                        .required('Title is required')
                        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Invalid email format'),
                })
            }
            if (fields[i] === 'password') {
                scheme = yup.object({
                    password: string()
                        .required('Title is required')
                        .min(4, 'Password should be more than 4 symbol')
                        .max(50, 'To much symbols'),
                })
            }
            if (fields[i] === 'passwordSignIn') {
                scheme = yup.object({
                    passwordSignIn: string()
                        .required('Title is required')
                        .min(4, 'Password should be more than 4 symbol')
                        .max(50, 'To much symbols'),
                })
            }
            if (fields[i] === 'confirmPassword') {
                scheme = yup.object({
                    confirmPassword: string()
                        .required('Title is required')
                        .oneOf([ref('password'), ''], 'Passwords must match'),
                })
            }
        }
        return scheme
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthTypes>({
        resolver: yupResolver(getFields(validateFields)),
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
