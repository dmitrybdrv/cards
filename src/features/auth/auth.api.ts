import { instance } from 'common/api'
import {
    CreatePassType,
    DataLoginType,
    ForgotType,
    ResponseInfoType,
    ResponseUserType,
    UserType
} from 'features/auth/auth.types'

/**
 * authApi - объект с методами для авторизационных запросов
 * @return register - метод - регистрация нового пользователя
 * @return login - метод - вход пользователя в приложение
 * @return logout - метод - выход пользователя из приложения
 */
export const authApi = {
    authMe() {
        return instance.post<UserType>(`/auth/me`)
    },
    register(data: DataLoginType) {
        return instance.post<ResponseUserType>(`/auth/register`, data)
    },
    login(data: DataLoginType) {
        return instance.post<UserType>(`/auth/login`, data)
    },
    logout() {
        return instance.delete<ResponseInfoType>(`/auth/me`)
    },
    forgot(data: ForgotType) {
        return instance.post<ResponseInfoType>(`/auth/forgot`, data)
    },
    createPass(data: CreatePassType) {
        return instance.post<ResponseInfoType>(`/auth/set-new-password`, data)
    },
}
