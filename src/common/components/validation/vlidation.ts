import { useWatch } from 'react-hook-form'

const REQUIRED_FIELD = 'Field is required'
const INPUT_IN_ENGLISH = 'Please make sure to input text in English'

export const emailValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.match(/[а-яА-Я]/)) {
            return INPUT_IN_ENGLISH
        } else if (!value.match(/^\S+@\S+\.\S{2,}$/)) {
            return 'Not correct email'
        }
        return true
    },
}

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if (value.match(/[а-яА-Я]/)) {
            return INPUT_IN_ENGLISH
        } else if (value.length < 5) {
            return 'Password should be more than 5 symbols'
        }
        return true
    },
}

export const confirmPasswordValidation = (watch: (name: 'password', defaultValue?: string | undefined) => string) => {
    const password = watch('password')
    return {
        required: 'Field is required',
        validate: (value: string | undefined) => {
            if (value?.match(/[а-яА-Я]/)) {
                return 'Please make sure to input text in English'
            } else if (value !== password) {
                return 'Passwords do not match'
            }
            return undefined
        },
    }
}
