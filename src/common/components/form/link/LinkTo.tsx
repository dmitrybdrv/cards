import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type PropsType = {
    link: { path: string; title: string }
    icon?: any
    style?: Object
}
/**
 * Функциональный компонент LinkTo, используется для создания ссылки с текстом / иконкой (опционально).
 * @function
 * @param {Object} props - Свойства компонента.
 * @param {{path: string, title: string}} props.link - Объект, содержащий свойства path и title для ссылки.
 * @returns {JSX.Element} React-элемент, содержащий ссылку с текстом.
 */
export const LinkTo: FC<PropsType> = ({ link, icon, style }) => {
    return (
        <Link
            to={link.path}
            style={style && style}
        >
            {icon}
            {link.title}
        </Link>
    )
}
