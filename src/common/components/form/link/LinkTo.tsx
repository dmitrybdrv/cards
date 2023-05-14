import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type PropsType = {
    link: { path: string; title: string }
}

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
