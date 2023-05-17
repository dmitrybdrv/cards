import { yupResolver } from '@hookform/resolvers/yup'
import { useActions } from 'common/hooks/useActions'
import { getFields, ValidateFieldsType } from 'common/utils'
import { authThunk, AuthTypes, DataLoginType } from 'features/auth'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

/**
 * useAuthForm - хук принимающий валидирующие значения и возвращающий: параметры работы с useForm, функцию onSubmit - для отправки данных
 * @param validateFields
 */
export const useAuthForm = (validateFields: ValidateFieldsType[]) => {
    const { registration, login } = useActions(authThunk)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthTypes>({
        resolver: yupResolver(getFields(validateFields)),
        mode: 'onTouched',
    })

    const onSubmit = async (data: AuthTypes) => {
        const regData = {
            email: data.emailSignUp,
            password: data.passwordSignUp,
        }
        registration(regData)
    }
    const onRegistration = async (data: AuthTypes) => {
        const regData = {
            email: data.emailSignUp,
            password: data.passwordSignUp,
        }
        registration(regData)
    }
    const onLogin = async (data: AuthTypes) => {
        const regData = {
            email: data.emailSignIn,
            password: data.passwordSignIn,
            rememberMe: data.rememberMe,
        }
        login(regData)
    }

    useEffect(() => {
        register('passwordSignUp')
        register('confirmPassword')
    }, [register])

    return { register, handleSubmit, errors, onSubmit, onRegistration, onLogin }
}
