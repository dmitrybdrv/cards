import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { Form } from 'common/components/form/Form'
import { checkMail } from 'common/image'
import { path } from 'common/utils'
import { useActions, useHelpingSelectors } from 'common/hooks'
import { authActions } from '../auth.slice'

/**
 * CheckEmail - компонент - форма проверки почты (подтвержение отправленной инструкции на почтовый ящик)
 */
export const CheckEmail: FC = () => {
    const {info} = useHelpingSelectors()
    const {clearInfo} =useActions(authActions)
    console.log(info)
    return (
        <Form title={'Check Email'} btnName={'Back to login'} onSubmit={() => clearInfo()} onButtonRedirect={path.LOGIN}>
            <img
                src={checkMail}
                alt='check-email'
                style={{ borderRadius: '50%', width: '100px', alignSelf: 'center' }}
            />
            <Typography mt={2} align={'center'} style={{ opacity: '0.6', marginBottom: '10px' }}>
                We`ve sent an Email with instructions to <br /> {info}
            </Typography>
        </Form>
    )
}
