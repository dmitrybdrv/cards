import { useHelpingSelectors } from 'common/hooks/useHelpingSelectors'
import React, { FC } from 'react'
import { toast, ToastContainer } from 'react-toastify'

/**
 * Toasts - компонент - всплывающие уведомления
 */
export const Toasts: FC = () => {
    const { appErrors, appInfo } = useHelpingSelectors()

    const notify = (errors: any, info: string | null) => {
        if (errors) {
            return toast.error(errors)
        }
        if (info === 'success') {
            return toast.success('Ок!')
        }
        if (info === 'warning') {
            return toast.warning('Beware!')
        }
        if (info === 'info') {
            return toast.info('Attention!')
        }
    }
    notify(appErrors, appInfo)
    return (
        <ToastContainer
            position='bottom-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
        />
    )
}
