export type UserType = Omit<ProfileType, 'token' | 'tokenDeathTime'>

export type ProfileType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: string
    verified: boolean
    _id: string
    __v: number

    token: string
    tokenDeathTime: number
}

export type FormDataType = {
    email: string
    password: string
    passConfirm?: string
    rememberMe?: boolean
    confirmPassword?: string
}

export type ResponseRegisterType = {
    addedUser: UserType
}
export type RedirectPathType = '/' | '/auth' | '/login'
