import { instance } from 'common/api'

/**
 * authApi - объект с методами для авторизационных запросов
 * @return register - метод регистрации нового пользователя
 */
export const authApi = {
    register(data: { email: string; password: string }) {
        return instance.post(`/auth/register`, data)
    },
}
