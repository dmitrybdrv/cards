import { useHelpingSelectors } from 'common/hooks/useHelpingSelectors'
import { toast } from 'react-toastify'

export const useToasts = () => {
    const {appErrors, appInfo, info} = useHelpingSelectors()

    if(appErrors) {
        toast.error(appErrors)
    }
    if(appInfo) {
        toast.info(appInfo)
    }
    if(info) {
        toast.success(info)
    }
}