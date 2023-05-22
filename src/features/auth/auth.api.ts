import { instance } from 'common/api'
import {
    CreatePassType,
    DataLoginType,
    ForgotPassType,
    ResponseInfoType, ResponseUpdateUserType,
    ResponseAddUserType,
    UserType, DataUpdateType
} from 'features/auth/auth.types'

/**
 * authApi - объект с методами для авторизационных запросов
 */
export const authApi = {

    login(data: DataLoginType) {
        return instance.post<UserType>(`/auth/login`, data)
    },
    register(data: DataLoginType) {
        return instance.post<ResponseAddUserType>(`/auth/register`, data)
    },
    authMe() {
        return instance.post<UserType>(`/auth/me`)
    },
    updateMe(data: DataUpdateType) {
        return instance.put<ResponseUpdateUserType>(`/auth/me`, data)
    },
    logout() {
        return instance.delete<ResponseInfoType>(`/auth/me`)
    },
    forgot(data: ForgotPassType) {
        return instance.post<ResponseInfoType>(`/auth/forgot`, data)
    },
    createPass(data: CreatePassType) {
        return instance.post<ResponseInfoType>(`/auth/set-new-password`, data)
    },
}
