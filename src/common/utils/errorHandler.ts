import { AxiosError, isAxiosError } from 'axios'

/**
 * Обрабатывает ошибки, возникающие при отправке запросов на сервер
 * @param {unknown} e - Ошибка, которая произошла при отправке запроса на сервер
 * @returns {string}
 */
export const errorHandler = (e: unknown) => {
    const err = e as Error | AxiosError
    if (isAxiosError(err)) {
        return err.response?.data ? (err.response.data as { error: string }).error : err.message
    } else {
        return `Some error ${err.message}`
    }
}
