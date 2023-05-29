import { useActions } from 'common/hooks/useActions'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { authActions } from 'features/auth'
import { selectorAuthRedirect } from 'features/auth/auth.selector'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigation = () => {
    const { authClearRedirect } = useActions(authActions)
    const redirect = useAppSelector(selectorAuthRedirect)
    const navigate = useNavigate()

    useEffect(() => {
        if (redirect !== '/') {
            return navigate(redirect)
        }
        authClearRedirect()
    }, [redirect])
}
