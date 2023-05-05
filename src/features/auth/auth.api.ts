import { instance } from 'common/api'
import { FormDataType, LoginType, ResponseRegisterType, UserType } from './auth.types'

export const authApi = {
    registration(data: LoginType) {
        return instance.post<ResponseRegisterType>(`/auth/register`, data)
    },

    me() {
        return instance.post<UserType>(`/auth/me`)
    },

    login(data: FormDataType) {
        return instance.post<UserType>(`/auth/login`, data)
    },

    logout() {
        return instance.delete(`/auth/me`, {})
    },
}
