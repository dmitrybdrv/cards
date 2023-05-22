import axios, { AxiosError, isAxiosError } from 'axios'
import { appActions, AppDispatch } from 'app'

/**
 * Обрабатывает ошибки, возникающие при отправке запросов на сервер
 */
export const errorHandler = (e: unknown): string => {
    const err = e as Error | AxiosError
    if (isAxiosError(err)) {
        return err.response?.data ? (err.response.data as { error: string }).error : err.message
    } else {
        return `Some error ${err.message}`
    }
}