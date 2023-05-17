/**
 * AuthTypes - типизация валидируемых параметров
 */
export type ResponseUserType = {
    addedUser: Omit<UserType, 'token' | 'tokenDeathTime'>
}
export type UserType = {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string
    verified: boolean
    publicCardPacksCount: number
    created: string
    updated: string
    __v: number
    token: string
    tokenDeathTime: number
}
export type DataLoginType = {
    email: string
    password: string
    rememberMe?: boolean
}
export type DataRegType = Omit<DataLoginType, 'rememberMe'>
export type AuthTypes = {
    emailSignUp: string
    passwordSignUp: string

    emailSignIn: string
    passwordSignIn: string

    email: string
    password: string

    rememberMe: boolean
    confirmPassword: string
}
export type ResponseInfoType = {
    info: string
    error: string
}
export type RedirectType =
    | '/'
    | '/auth/login'
    | '/auth/register'
    | '/auth/check-email'
    | '/auth/forgot-password'
    | '/auth/create-new-password'
    | '/packs'
    | '/profile'
    | '/cards'
    | '/learn'
