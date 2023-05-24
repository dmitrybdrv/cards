import { StringNullType } from 'app'
import { useHelpingSelectors } from 'common/hooks/useHelpingSelectors'
import React, { FC } from 'react'
import { toast, ToastContainer } from 'react-toastify'


/**
 * Toasts - компонент - всплывающие уведомления
 */
export const Toasts: FC = () => {
    const { appErrors, appInfo } = useHelpingSelectors()

    const notify = (appErrors: StringNullType, info: StringNullType) => {
        if (appErrors) {
            return toast.error(appErrors, {toastId: '2'})
        } else if (info) {
            return toast.success(info, {toastId: '1'})
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
