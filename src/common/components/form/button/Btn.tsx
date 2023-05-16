import { Button } from '@mui/material'
import React, { FC } from 'react'

type PropsType = {
    onButtonRedirect?: string
    btnName: string
}
/**
 * Btn - компонент - кнопка (из библиотеки MUI). Возможность переиспользованя в качестве: кнопки перехода по переданному пути, либо отправляющей данные формы
 * @param {string} onButtonRedirect - путь для перенаправления по клику
 * @param {string} btnName - имя кнопки
 */
export const Btn: FC<PropsType> = ({ onButtonRedirect, btnName }) => {
    return (
        <Button
            variant={'contained'}
            style={{ margin: '20px 0', borderRadius: '20px' }}
            type={onButtonRedirect ? 'button' : 'submit'}
            href={onButtonRedirect}>
            {btnName}
        </Button>
    )
}
