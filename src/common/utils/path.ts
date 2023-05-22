export const path = {
    MAIN: '/',
    ERROR_PAGE: '*',
    AUTH: '/auth',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    CHECK_EMAIL: '/auth/check-email',
    FORGOT_PASSWORD: '/auth/forgot-password',
    CREATE_NEW_PASSWORD: '/auth/create-new-password/:token',
    PACKS: '/packs',
    PROFILE: '/profile',
    CARDS: '/cards',
    LEARN: '/learn',
} as const
