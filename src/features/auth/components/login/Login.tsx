import { Button, FormGroup } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { emailValidation, passwordValidation } from 'common/components/validation/vlidation'
import { useActions } from 'common/hooks'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { selectIsLoggedIn } from 'features/auth/auth.selector'
import { authThunk } from 'features/auth/auth.slice'
import { FormDataType } from 'features/auth/auth.types'
import React, { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import style from './style.module.scss'

export const Login: FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormDataType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    })
    const navigate = useNavigate()
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const { login } = useActions(authThunk)

    const onSubmitting: SubmitHandler<FormDataType> = (data) => {
        login(data)
    }

    if (isLoggedIn) {
        navigate('/profile')
    }
    return (
        <div className={style.formContainer}>
            <form onSubmit={handleSubmit(onSubmitting)} className={style.loginForm}>
                <Typography variant='h4'>{'Login'}</Typography>
                <FormGroup>
                    <Controller
                        name={'email'}
                        control={control}
                        rules={emailValidation}
                        render={({ field }) => (
                            <TextField
                                label={'Email'}
                                type={'email'}
                                variant='standard'
                                margin={'normal'}
                                value={field.value}
                                onChange={(e) => field.onChange(e)}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name={'password'}
                        rules={passwordValidation}
                        render={({ field }) => (
                            <TextField
                                label={'Password'}
                                type={'password'}
                                variant='standard'
                                margin={'normal'}
                                value={field.value}
                                onChange={(e) => field.onChange(e)}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                        )}
                    />

                    <Controller
                        name={'rememberMe'}
                        control={control}
                        render={({ field }) => (
                            <FormControlLabel
                                control={<Checkbox value={field.value} onChange={(e) => field.onChange(e)} />}
                                label='Remember me'
                            />
                        )}
                    />

                    <Link to='#' className={style.forgotPassLink}>
                        Forgot password?
                    </Link>

                    <Button variant='contained' type={'submit'} sx={{ margin: '20px 0', borderRadius: '20px' }}>
                        {'Login'}
                    </Button>

                    <Typography color='text.secondary' variant='body2'>
                        Don`t have an account?
                    </Typography>
                    <Link to='/register' className={style.linkToReg}>
                        Register
                    </Link>
                </FormGroup>
            </form>
        </div>
    )
}
