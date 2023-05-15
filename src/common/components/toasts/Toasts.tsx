import { useHelpSelectors } from 'common/hooks/useHelpSelectors'
import React, { FC } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export const Toasts: FC = () => {
    const { errors, infoText } = useHelpSelectors()

    const notify = (errors: string, infoText: string) => {
        if (errors) {
            return toast.error(errors)
        }
        if (infoText === 'success') {
            return toast.success('Все загрузилось!')
        }
        if (infoText === 'warning') {
            return toast.warning('So easy!')
        }
        if (infoText === 'info') {
            return toast.info('Wow so easy!')
        }
    }
    notify(errors, infoText)
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
