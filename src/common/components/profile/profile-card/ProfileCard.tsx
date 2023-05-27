import React, { FC,  } from 'react'
import { useActions, useHelpingSelectors } from 'common/hooks'
import { authThunk } from 'features/auth'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { Avatar, Paper } from '@mui/material'
import { EditableSpan } from 'common/components/editable-span/EditableSpan'
import { AnnotationField } from 'common/components/form/anotation-field/AnotationField'
import { Btn } from 'common/components/form/button/Btn'
import { TypographyField } from 'common/components/form/typography-field/TypographyField'
import { ava } from 'common/image'

export const ProfileCard: FC = () => {
    console.log('pr card')
    const { logout, updateMe } = useActions(authThunk)
    const { profile } = useHelpingSelectors()
    const onChangeNameHandler = (newName: string) => updateMe({ name: newName })

    return (
        <Paper elevation={1} sx={{ textAlign: '-webkit-center', padding: '30px', width: '400px' }}>
            <TypographyField title={'Personal information'} style={{ marginBottom: '30px' }} />
            <Avatar alt='profile-avatar' src={ava} sx={{ width: 72, height: 72, marginBottom: '20px' }}>
                <PermIdentityIcon />
            </Avatar>
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