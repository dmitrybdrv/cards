import { useAppSelector } from 'common/hooks/useAppSelector'

export const useMainSelectors = () => {
    const appStatus = useAppSelector((state) => state.app.appStatus)
    const isAppInitialized = useAppSelector((state) => state.app.isAppInitialized)
    const isLoggedIn = useAppSelector((state) => state.auth.profile?._id)

    return { appStatus, isAppInitialized, isLoggedIn }
}
