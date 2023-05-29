import { yupResolver } from '@hookform/resolvers/yup'
import { appActions } from 'app'
import { useActions } from 'common/hooks/useActions'
import { getFields, ValidateFieldsType } from 'common/utils'
import { authThunk, AuthTypes } from 'features/auth'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

/**
 * useAuthForm - хук принимающий валидирующие значения и возвращающий: параметры работы с useForm, функцию onSubmit - для отправки данных
 * @param validateFields
 */
export const useAuthForm = (validateFields: ValidateFieldsType[]) => {

    const { registration, login, authForgot, createPass, logout } = useActions(authThunk)
    const { setAppInfo } = useActions(appActions)
    let {token} = useParams()


    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm<AuthTypes>({
        resolver: yupResolver(getFields(validateFields)),
        mode: 'onTouched',
    })


    const onRegister = (data: AuthTypes) => {
        const regData = {
            email: data.emailSignUp,
            password: data.passwordSignUp,
        }
        registration(regData)
            .unwrap()
            .then((res) => {
                toast.success('Account created :)')
            })
            .catch((err) => {
                toast.error(err)
            })
    }
    const onLogin = (data: AuthTypes) => {
        const regData = {
            email: data.emailSignIn,
            password: data.passwordSignIn,
            rememberMe: data.rememberMe,
        }
        login(regData)
            .unwrap()
            .then((res) => {
                toast.success(`${'Welcome'} ${res.profile.name}`)
            })
            .catch((err) => {
                if(err === 'not correct password /ᐠ-ꞈ-ᐟ\\') {
                    toast.error('not correct email or password')
                } else {
                    toast.error(err)
                }
        })
    }
    const onLogOut = () => {
        logout({})
            .unwrap()
            .then((res) => {
                toast.success(res.info)
            })
            .catch((err) => {
                toast.error(err)
            })
    }
    const onAuthForgot = (data: AuthTypes) => {
        const newData = {
            email: data.email,
            from: 'test-front-admin <ai73a@yandex.by>',
            message: `<div style="background-color: #c9cbc9; padding: 15px">
                        This is password recovery link from CARDS: <a href='http://localhost:3000/auth/create-new-password/$token$'>link</a></div>`
        }
       authForgot(newData)
           .unwrap()
           .then((res) => {
               setAppInfo({info: newData.email})
               toast.success(res.info)
           })
           .catch((err) => {
               toast.error(err)
           })
    }
    const onCreateNewPass = (data: AuthTypes) => {
        if(token) {
            const newData = {
                password: data.password,
                resetPasswordToken: token
            }
            createPass(newData)
                .unwrap()
                .then((res) => {
                    toast.success(res.info)
                })
                .catch((err) => {
                    toast.error(err)
                })
        }
    }


    useEffect(() => {
        register('passwordSignUp')
        register('confirmPassword')
    }, [register])

    const disabledButton = !isDirty || !isValid

    return { register, handleSubmit, errors, disabledButton, onRegister, onLogin, onAuthForgot, onCreateNewPass, onLogOut }
}
