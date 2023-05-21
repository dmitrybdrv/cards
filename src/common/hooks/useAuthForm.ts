import { yupResolver } from '@hookform/resolvers/yup'
import { useActions } from 'common/hooks/useActions'
import { getFields, ValidateFieldsType } from 'common/utils'
import { authThunk, AuthTypes } from 'features/auth'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

/**
 * useAuthForm - хук принимающий валидирующие значения и возвращающий: параметры работы с useForm, функцию onSubmit - для отправки данных
 * @param validateFields
 */
export const useAuthForm = (validateFields: ValidateFieldsType[]) => {
    const { registration, login, authForgot, createPass } = useActions(authThunk)
    let {token} = useParams()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthTypes>({
        resolver: yupResolver(getFields(validateFields)),
        mode: 'onTouched',
    })

    const onRegister = async (data: AuthTypes) => {
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
    const onAuthForgot = (data: AuthTypes) => {
        const newData = {
            email: data.email,
            from: 'test-front-admin <ai73a@yandex.by>',
            message: `<div style="background-color: #c9cbc9; padding: 15px">
                        This is password recovery link from CARDS: <a href='http://localhost:3000/auth/create-new-password/$token$'>link</a></div>`
        }
        authForgot(newData)
    }
    const onCreateNewPass = (data: AuthTypes) => {
        debugger
        if(token) {
            const newData = {
                password: data.password,
                resetPasswordToken: token
            }
            createPass(newData)
        }
    }

    useEffect(() => {
        register('passwordSignUp')
        register('confirmPassword')
    }, [register])

    return { register, handleSubmit, errors, onRegister, onLogin, onAuthForgot, onCreateNewPass }
}
