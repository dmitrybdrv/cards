/**
 * AuthTypes - типизация валидируемых параметров
 */
export type ResponseAddUserType = {
    addedUser: Omit<UserType, 'tokenDeathTime' | 'token' | 'avatar'>
}
export type ResponseUpdateUserType = {
    updatedUser: UserType
}
export type UserType = {
    '_id': string
    'email': string
    'rememberMe': boolean
    'isAdmin': boolean
    'name': string
    'verified': boolean
    'publicCardPacksCount': number
    'created': string
    'updated': string
    '__v': number

    'token': string
    'tokenDeathTime': number
    'avatar': null | string
}
export type DataLoginType = {
    email: string
    password: string
    rememberMe?: boolean
}
export type DataUpdateType = {
    name?: string
    avatar?: string
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
export type ForgotPassType = {
    email: string,
    from?: string,
    message: string
}
export type CreatePassType = {
    password: string
    resetPasswordToken: string
}
