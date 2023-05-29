import { ref, string } from 'yup'
import * as yup from 'yup'

export type ValidateFieldsType =
    | 'emailSignUp'
    | 'emailSignIn'
    | 'passwordSignUp'
    | 'passwordSignIn'
    | 'confirmPassword'
    | 'password'
    | 'email'

/**
 * getFields - функция валидации полей
 * @param fields - поля принимаемые для  валидации данных
 */
export const getFields = (fields: ValidateFieldsType[]) => {

    let validationSchema = yup.object().shape({})

    for (const field of fields) {
        if (field === 'emailSignIn') {
            validationSchema = validationSchema.shape({
                emailSignIn: string()
                    .email('Must be valid email')
                    .required('Title is required')
                    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Invalid email format'),
            })
        } else if (field === 'emailSignUp') {
            validationSchema = validationSchema.shape({
                emailSignUp: string()
                    .email('Must be valid email')
                    .required('Title is required')
                    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Invalid email format'),
            })
        } else if (field === 'email') {
            validationSchema = validationSchema.shape({
                email: string()
                    .email('Must be valid email')
                    .required('Title is required')
                    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Invalid email format'),
            })
        } else if (field === 'password') {
            validationSchema = validationSchema.shape({
                password: string()
                    .required('Title is required')
                    .min(8, 'Password should be more than 7 symbol')
                    .max(50, 'To much symbols'),
            })
        } else if (field === 'passwordSignIn') {
            validationSchema = validationSchema.shape({
                passwordSignIn: string()
                    .required('Title is required')
                    .min(8, 'Password should be more than 7 symbol')
                    .max(50, 'To much symbols'),
            })
        } else if (field === 'passwordSignUp') {
            validationSchema = validationSchema.shape({
                passwordSignUp: string()
                    .required('Title is required')
                    .min(8, 'Password should be more than 7 symbol')
                    .max(50, 'To much symbols'),
            })
        } else if (field === 'confirmPassword') {
            validationSchema = validationSchema.shape({
                confirmPassword: string()
                    .required('Title is required')
                    .oneOf([ref('passwordSignUp'), ''], 'Passwords must match'),
            })
        }
    }
    return validationSchema
}
