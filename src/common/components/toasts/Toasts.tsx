import React, { FC } from 'react'
import { ToastContainer } from 'react-toastify'


/**
 * Toasts - компонент - всплывающие уведомления
 */
export const Toasts: FC = () => {
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
