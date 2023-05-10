import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { selectRedirectPath } from 'features/auth/auth.selector'
import { authAction } from 'features/auth/auth.slice'
import { useNavigate } from 'react-router-dom'

export const useRedirect = () => {
    const redirectPath = useAppSelector(selectRedirectPath)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    if (redirectPath !== '/') {
        navigate(redirectPath)
        dispatch(authAction.clearRedirect())
    }
}
