import { Btn } from 'common/components/form/button/Btn'
import { path } from 'common/utils'
import React, { FC } from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

/**
 * Компонент ErrorPage, отображающий страницу с ошибкой маршрута.
 */
export const ErrorPage: FC = () => {
    let error = useRouteError()

    // Если ошибка является ошибкой маршрута и имеет статус 401, то отображаем специальное сообщение об ошибке
    if (isRouteErrorResponse(error) && error.status === 401) {
        return (
            <div>
                <h1>{error.status}</h1>
                <h2>{error.data.sorry}</h2>
                <p>Go ahead and email {error.data.hrEmail} if you feel like this is a mistake.</p>
            </div>
        )
    }
    // Если ошибка не является специальным случаем для данного маршрута, повторно выбрасываем ошибку, чтобы родительский компонент ошибок мог ее обработать
    /*throw error*/
    return (
        <div style={{justifyContent: 'center', display: 'grid', marginTop: '150px'}}>
            <div>Something went wrong :(</div>
            <div style={{textAlign: 'center'}}><Btn btnName={'fullback'} onButtonRedirect={path.MAIN}/></div>
        </div>
    )
}
