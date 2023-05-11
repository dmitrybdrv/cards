export type ProfileType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number // количество колод

    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean // подтвердил ли почту
    rememberMe: boolean

    error?: string
}

export type AuthType = {
    email: string
    password: string
    rememberMe?: boolean
}

export type ResponseInfoType = {
    info: string
    error: string
}
