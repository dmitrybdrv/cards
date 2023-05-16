import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type PropsType = {
    link: { path: string; title: string }
}
/**
 * Функциональный компонент LinkTo, используется для создания ссылки с текстом.
 * @function
 * @param {Object} props - Свойства компонента.
 * @param {{path: string, title: string}} props.link - Объект, содержащий свойства path и title для ссылки.
 * @returns {JSX.Element} React-элемент, содержащий ссылку с текстом.
 */
export const LinkTo: FC<PropsType> = ({ link }) => {
    return (
        <Link
            to={link.path}
            style={{
                marginBottom: '20px',
                width: 'fit-content',
                alignSelf: 'flex-end',
                textDecoration: 'none',
                color: '#000',
                fontWeight: '500',
            }}>
            {link.title}
        </Link>
    )
}
