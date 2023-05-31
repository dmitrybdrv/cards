import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { LinkTo } from 'common/components'
import { ProfileCard } from 'features/profile/profile-card/ProfileCard'
import React from 'react'

export const Profile = () => {
    return (
        <div
            style={{
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
            }}>
            <div style={{ position: 'fixed', top: '100px' }}>
                <LinkTo
                    link={{ title: 'Back to Packs List', path: '/packs' }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: '#000',
                    }}
                    icon={<ArrowBackIosIcon />}
                />
            </div>

            <ProfileCard />
        </div>
    )
}
