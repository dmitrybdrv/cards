import { instance } from 'common/api'
import { AuthType, ProfileType, ResponseInfoType } from 'features/auth/auth.types'

export const authAPI = {
    //TODO проверить типизацию

    authMe() {
        return instance.post<ProfileType>(`/auth/me`)
    },

    register(data: AuthType) {
        //TODO дописать типизацию
        return instance.post(`/auth/register`, data)
    },

    login(data: AuthType) {
        return instance.post<ProfileType>(`/auth/login`, data)
    },

    logout() {
        return instance.delete<ResponseInfoType>(`/auth/me`)
    },
}
