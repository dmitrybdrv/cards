import React from 'react'
import { NavLink } from 'react-router-dom'

export const Root = () => {
    return (
        <>
            <nav style={{ width: 'fit-content' }}>
                <NavLink to={'/login'} style={{ paddingRight: '10px' }}>
                    login
                </NavLink>
                <NavLink to={'/registration'} style={{ paddingRight: '10px' }}>
                    registration
                </NavLink>
                <NavLink to={'/check-email'} style={{ paddingRight: '10px' }}>
                    check email
                </NavLink>
                <NavLink to={'/set-new-password'} style={{ paddingRight: '10px' }}>
                    set new password
                </NavLink>
                <NavLink to={'/forgot-password'} style={{ paddingRight: '10px' }}>
                    forgot password
                </NavLink>
                <NavLink to={'/profile'} style={{ paddingRight: '10px' }}>
                    profile
                </NavLink>
                <NavLink to={'/packs'} style={{ paddingRight: '10px' }}>
                    packs
                </NavLink>
                <NavLink to={'/cards'} style={{ paddingRight: '10px' }}>
                    cards
                </NavLink>
                <NavLink to={'/learn'} style={{ paddingRight: '10px' }}>
                    learn
                </NavLink>
            </nav>
        </>
    )
}
