import { instance } from 'common/api'
import { ResponseInfoType, ResponseUserType, UserType } from 'features/auth/auth.types'

/**
 * authApi - объект с методами для авторизационных запросов
 * @return register - метод - регистрация нового пользователя
 * @return login - метод - вход пользователя в приложение
 * @return logout - метод - выход пользователя из приложения
 */
export const authApi = {
    authMe() {
        return instance.post(`/auth/me`)
    },
    register(data: { email: string; password: string }) {
        return instance.post<ResponseUserType>(`/auth/register`, data)
    },
    login(data: { email: string; password: string; rememberMe?: boolean }) {
        return instance.post<UserType>(`/auth/login`, data)
    },
    logout() {
        return instance.delete<ResponseInfoType>(`/auth/me`)
    },
}
