import { selectorAppErrors, selectorAppInfo } from 'app/app.selectors'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { selectorAuthInfo } from 'features/auth/auth.selector'
import { toast } from 'react-toastify'

export const useToasts = () => {
    const appErrors = useAppSelector(selectorAppErrors)
    const appInfo = useAppSelector(selectorAppInfo)
    const info = useAppSelector(selectorAuthInfo)

    if (appErrors) {
        toast.error(appErrors)
    }
    // if (appInfo) {
    //     toast.info(appInfo)
    // }
    if (info) {
        toast.success(info)
    }
}