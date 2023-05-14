import { AuthTypes } from 'features/auth/auth.types'
import { string } from 'yup'
import * as yup from 'yup'

let schema = yup.object<AuthTypes>({
    email: string()
        .email('Must be valid email')
        .required('Title is required')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Invalid email format'),
    password: string()
        .required('Title is required')
        .min(4, 'Password should be more than 4 symbol')
        .max(50, 'To much symbols'),
})

export { schema }
