import React, { FC } from 'react'
import { Avatar, Paper } from '@mui/material'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { AnnotationField, Btn, EditableSpan, LinkTo, TypographyField } from 'common/components/index'
import { useActions, useHelpingSelectors } from 'common/hooks'
import { ava } from 'common/image'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { authThunk } from 'features/auth'

export const Profile: FC = () => {
    const { logout, updateMe } = useActions(authThunk)
    const { profile } = useHelpingSelectors()
    const onChangeNameHandler = (newName: string) => updateMe({ name: newName })


    return (
        <div style={{ marginTop: '100px' }}>
            <div style={{ position: 'absolute', left: '600px', top: '100px' }}>
                <LinkTo link={{ title: 'Back to Packs List', path: '/packs' }}
                        style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#000' }}
                        icon={<ArrowBackIosIcon />}
                />
            </div>


            <Paper elevation={1} sx={{textAlign: '-webkit-center', padding: '30px', width: '400px'}}>
                        <TypographyField title={'Personal information'} style={{ marginBottom: '30px' }} />
                        <Avatar alt='profile-avatar' src={ava} sx={{ width: 72, height: 72, marginBottom: '20px'}} >
                            <PermIdentityIcon/>
                        </Avatar>
                        <EditableSpan
                            value={profile!.name}
                            onChange={onChangeNameHandler}
                            icon={<CreateOutlinedIcon />}
                        />
                        <AnnotationField description={profile?.email} />
                        <Btn btnName={'Log out'} callBack={logout} btnColor={'#fff'} textColor={'#000'} icon />
            </Paper>

        </div>
    )
}
