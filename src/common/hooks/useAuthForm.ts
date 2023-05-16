import { yupResolver } from '@hookform/resolvers/yup'
import { getFields, ValidateFieldsType } from 'common/utils'
import { AuthTypes } from 'features/auth'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

/**
 * useAuthForm - хук принимающий валидирующие значения и возвращающий: параметры работы с useForm, функцию onSubmit - для отправки данных
 * @param validateFields
 */
export const useAuthForm = (validateFields: ValidateFieldsType[]) => {
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
        register('passwordSignUp')
        register('confirmPassword')
    }, [register])

    return { register, handleSubmit, errors, onSubmit }
}
