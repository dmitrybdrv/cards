import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type PropsType = {
    link?: { path: string; name: string } | undefined
}
/**
 * LinkField - компонент - ссылка, принимающий параметром объект - ссылку для перехода по нажатию
 * @param {path: string; name: string} link - не обязательный параметр.
 */
export const LinkField: FC<PropsType> = ({ link }) => {
    return (
        <Link
            to={link?.path || '/'}
            style={{
                width: 'fit-content',
                alignSelf: 'center',
                color: '#366dfd',
                fontWeight: 'bold',
            }}>
            {link?.name}
        </Link>
    )
}
