import React, { FC } from 'react'
import { styled } from '@mui/material/styles'
import { Avatar, Paper, Stack, Badge } from '@mui/material'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useActions, useHelpingSelectors } from 'common/hooks'
import { EditableSpan } from 'common/components/editable-span/EditableSpan'
import { AnnotationField } from 'common/components/form/anotation-field/AnotationField'
import { Btn } from 'common/components/form/button/Btn'
import { TypographyField } from 'common/components/form/typography-field/TypographyField'
import { ava } from 'common/image'
import { authThunk } from 'features/auth'

export const ProfileCard: FC = () => {
    const { logout, updateMe } = useActions(authThunk)
    const { profile } = useHelpingSelectors()
    const onChangeNameHandler = (newName: string) => updateMe({ name: newName })
    const SmallAvatar = styled(Avatar)(({ theme }) => ({
        width: 28,
        height: 28,
        border: `2px solid ${theme.palette.background.paper}`
    }))

    return (
        <Paper elevation={1} sx={{ textAlign: '-webkit-center', padding: '30px', width: '400px' }}>
            <TypographyField title={'Personal information'} style={{ marginBottom: '30px' }} />
            <Stack direction={'row'} justifyContent={'center'}>
                <Badge
                    overlap='circular'
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <SmallAvatar sx={{ top: '-20px' }}>
                            <CameraAltIcon />
                        </SmallAvatar>
                    }
                >
                    <Avatar alt='profile-avatar' src={ava} sx={{ width: 72, height: 72, marginBottom: '20px' }}>
                        <PermIdentityIcon />
                    </Avatar>
                </Badge>
            </Stack>
            <EditableSpan
                value={profile!.name}
                onChange={onChangeNameHandler}
                icon={<CreateOutlinedIcon />}
            />
            <AnnotationField description={profile?.email} />
            <Btn btnName={'Log out'} callBack={logout} btnColor={'#fff'} textColor={'#000'} icon />
        </Paper>
    )
}