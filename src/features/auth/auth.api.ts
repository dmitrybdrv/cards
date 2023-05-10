import { instance } from 'common/api'
import { FormDataType, ProfileType, ResponseRegisterType } from './auth.types'

export const authApi = {
    registration(data: FormDataType) {
        return instance.post<ResponseRegisterType>(`/auth/register`, data)
    },

    me() {
        return instance.post(`/auth/me`)
    },

    login(data: FormDataType) {
        return instance.post<ProfileType>(`/auth/login`, data)
    },

    logout() {
        return instance.delete(`/auth/me`, {})
    },
}
