export type UserType = {
    created: Date
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: Date
    verified: boolean
    _id: string
    avatar?: string
    error?: string
}

export type ResponseRegisterType = {
    addedUser: UserType
}

export type FormDataType = {
    email: string
    password: string
    rememberMe?: boolean
    confirmPassword?: string
}

export type RegisterFormType = Omit<FormDataType, 'rememberMe'>
export type LoginFormType = Omit<FormDataType, 'confirmPassword'>

export type LoginType = Omit<FormDataType, 'rememberMe'>
