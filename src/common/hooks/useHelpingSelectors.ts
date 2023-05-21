import { useAppSelector } from 'common/hooks/useAppSelector'

/**
 * Хук содержащий все селекторы приложения
 */
export const useHelpingSelectors = () => {
    const appErrors = useAppSelector((state) => state.app.appErrors)
    const appInfo = useAppSelector((state) => state.app.appInfo)
    const appStatus = useAppSelector((state) => state.app.appStatus)
    const appInitializing = useAppSelector((state) => state.app.appInitializing)

    const profile = useAppSelector((state) => state.auth.profile)
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
    const redirect = useAppSelector((state) => state.auth.redirect)
    const info = useAppSelector((state) => state.auth.info)

    return { appErrors, appInfo, appStatus, appInitializing, profile, isLoggedIn, redirect, info }
}
