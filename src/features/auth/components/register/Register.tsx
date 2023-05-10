import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, FormGroup, IconButton, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import { confirmPasswordValidation, emailValidation, passwordValidation } from 'common/components/validation/vlidation'
import { useActions } from 'common/hooks'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { selectRedirectPath } from 'features/auth/auth.selector'
import { authAction, authThunk } from 'features/auth/auth.slice'
import { FormDataType } from 'features/auth/auth.types'
import React, { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import style from './style.module.scss'

export const Register: FC = () => {
    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormDataType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
            confirmPassword: '',
        },
    })

    const navigate = useNavigate()
    const redirectPath = useAppSelector(selectRedirectPath)

    const { registration } = useActions(authThunk)
    const { clearRedirect } = useActions(authAction)

    const [showConfirmPass, setShowConfirmPass] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowConfirmPass = () => {
        setShowConfirmPass(!showConfirmPass)
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmitting: SubmitHandler<FormDataType> = (data) => {
        //registration(data)
    }

    if (redirectPath !== '/') {
        navigate(redirectPath)
        clearRedirect()
    }
    return (
        <div className={style.formContainer}>
            <form onSubmit={handleSubmit(onSubmitting)} className={style.registerForm}>
                <Typography variant='h4'>{'Registration'}</Typography>
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
                                type={showPassword ? 'text' : 'password'}
                                variant='standard'
                                margin={'normal'}
                                value={field.value}
                                onChange={field.onChange}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={toggleShowPassword}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    ),
                                }}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name={'confirmPassword'}
                        rules={confirmPasswordValidation(watch)}
                        render={({ field }) => (
                            <TextField
                                label={'Confirm password'}
                                type={showConfirmPass ? 'text' : 'password'}
                                variant='standard'
                                margin={'normal'}
                                value={field.value}
                                onChange={field.onChange}
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword?.message}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={toggleShowConfirmPass}>
                                            {showConfirmPass ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    ),
                                }}
                            />
                        )}
                    />

                    <Button
                        variant='contained'
                        type={'submit'}
                        className={style.formButton}
                        sx={{ margin: '20px 0', borderRadius: '20px' }}>
                        {'Registr'}
                    </Button>

                    <div>
                        <Typography color='text.secondary' variant='body2'>
                            Already have an account?
                        </Typography>
                    </div>

                    <div className={style.linkTo}>
                        <Link to='/login'>Login</Link>
                    </div>
                </FormGroup>
            </form>
        </div>
    )
}
