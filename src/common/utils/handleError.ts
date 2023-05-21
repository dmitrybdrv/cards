import { Dispatch } from '@reduxjs/toolkit'
import { appActions } from 'app'
import axios, { AxiosError } from 'axios'

/**
 * Обрабатывает ошибки сети, возникающие при отправке запросов на сервер
 * @param {unknown} e - Ошибка, которая произошла при отправке запроса на сервер
 * @param {Dispatch} dispatch - Функция dispatch из библиотеки Redux для отправки actions
 * @returns {void}
 */
export const handleError = (e: unknown, dispatch: Dispatch) => {
    const err = e as Error | AxiosError<{ error: string }>
    if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.error : 'Some error occurred'
        return { error }
    } else {
        return { error: `Native error ${err.message}` }
    }
}
