import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { LinkTo } from 'common/components/index'
import { ProfileCard } from 'common/components/profile/profile-card/ProfileCard'
import React from 'react'

export const Profile = () => {

    return (
        <div style={{ marginTop: '100px' }}>
            <div style={{ position: 'absolute', left: '600px', top: '100px' }}>
                <LinkTo link={{ title: 'Back to Packs List', path: '/packs' }}
                        style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#000' }}
                        icon={<ArrowBackIosIcon />}
                />
            </div>
            <ProfileCard />
        </div>
    )
}
