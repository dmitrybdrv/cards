import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Paper,
    TextField,
} from '@mui/material'
import { useActions } from 'common/hooks'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { selectIsLoggedIn } from 'features/auth/auth.selector'
import { authThunk } from 'features/auth/auth.slice'
import { FormDataType } from 'features/auth/auth.types'
import React, { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'

export const Login: FC = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const { login } = useActions(authThunk)

    const { register, handleSubmit } = useForm<FormDataType>({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        const payload = {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe,
        }
        login(payload)
    }

    if (isLoggedIn) {
        return <Navigate to={'/profile'} />
    }
    return (
        <Grid container justifyContent={'center'} style={{ marginTop: '50px' }}>
            <Paper elevation={6}>
                <Grid item style={{ width: '350px', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
                    <h2>
                        <strong>Login</strong>
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl sx={{ width: '30ch' }}>
                            <FormGroup>
                                <TextField
                                    variant={'standard'}
                                    label={'Email'}
                                    margin={'normal'}
                                    type={'email'}
                                    {...register('email', {
                                        required: true,
                                    })}
                                />

                                <FormControl sx={{ width: '30ch' }} variant='standard'>
                                    <InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
                                    <Input
                                        id='standard-adornment-password'
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label='toggle password visibility'
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}>
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>

                                <FormControlLabel
                                    control={<Checkbox />}
                                    label='Remember me'
                                    style={{ marginTop: '20px' }}
                                    {...register('rememberMe', {})}
                                />

                                <FormLabel style={{ marginTop: '20px', marginLeft: '50%' }}>
                                    <Link to={'/'}>forgot password?</Link>
                                </FormLabel>

                                <Button
                                    style={{ marginTop: '40px', borderRadius: '20px' }}
                                    type={'submit'}
                                    variant={'contained'}
                                    disabled={false}
                                    color={'primary'}>
                                    Log in
                                </Button>
                            </FormGroup>
                            <FormLabel style={{ marginTop: '30px' }}>
                                <p>Don`t have an account?</p>
                            </FormLabel>

                            <FormLabel style={{ marginTop: '20px' }}>
                                <Link to={'/auth'}>Registration</Link>
                            </FormLabel>
                        </FormControl>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    )
}
