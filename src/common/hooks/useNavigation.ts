import { useActions } from 'common/hooks/useActions'
import { useHelpingSelectors } from 'common/hooks/useHelpingSelectors'
import { authActions } from 'features/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigation = () => {
    const { clearRedirect } = useActions(authActions)
    const { redirect } = useHelpingSelectors()
    const navigate = useNavigate()

    useEffect(() => {
        if (redirect !== '/') {
            return navigate(redirect)
        }
        clearRedirect()
    }, [redirect])
}
