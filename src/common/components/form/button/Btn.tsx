import { Button } from '@mui/material'
import { ColorBtnType } from 'common/common.types'
import React, { FC } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';

type PropsType = {
    onButtonRedirect?: string
    btnName: string
    callBack?: (a: unknown) => void
    btnColor?: ColorBtnType
    textColor?: ColorBtnType
    icon?: boolean
    disabledButton?: boolean
}
/**
 * Btn - компонент - кнопка (из библиотеки MUI). Возможность переиспользованя в качестве: кнопки перехода по переданному пути, либо отправляющей данные формы
 * @param {string} onButtonRedirect - путь для перенаправления по клику (опционально)
 * @param {string} btnName - имя кнопки
 * @param {string} color - цвет кнопки
 * @param {Function} callBack - функция выполняемая по клику (опционально)
 */
export const Btn: FC<PropsType> = ({ onButtonRedirect, btnName, callBack, btnColor='primary', textColor='#fff', icon, disabledButton }) => {

    const clickHandler = () => {
        callBack && callBack('')
    }


    return (
        <Button
            variant={'contained'}
            style={{ margin: '20px 0', borderRadius: '20px', background: btnColor, color: textColor }}
            type={onButtonRedirect ? 'button' : 'submit'}
            href={onButtonRedirect}
            onClick={clickHandler}
            startIcon={icon && <LogoutIcon/>}
            disabled={disabledButton ? disabledButton : false}
        >
            {btnName}
        </Button>
    )
}
//TODO пределать кнопку в полиморфный вариант. clickHandler - удалить