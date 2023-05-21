import { Button } from '@mui/material'
import React, { FC } from 'react'

type PropsType = {
    onButtonRedirect?: string
    btnName: string
    callBack?: (a: unknown) => Promise<any>
}
/**
 * Btn - компонент - кнопка (из библиотеки MUI). Возможность переиспользованя в качестве: кнопки перехода по переданному пути, либо отправляющей данные формы
 * @param {string} onButtonRedirect - путь для перенаправления по клику (опционально)
 * @param {string} btnName - имя кнопки
 * @param {Function} callBack - функция выполняемая по клику (опционально)
 */
export const Btn: FC<PropsType> = ({ onButtonRedirect, btnName, callBack }) => {
    //TODO пределать кнопку в полиморфный вариант. clickHandler - удалить
    const clickHandler = () => {
        callBack && callBack('')
    }
    return (
        <Button
            variant={'contained'}
            style={{ margin: '20px 0', borderRadius: '20px' }}
            type={onButtonRedirect ? 'button' : 'submit'}
            href={onButtonRedirect}
            onClick={clickHandler}>
            {btnName}
        </Button>
    )
}
//TODO сделать полиморфным
