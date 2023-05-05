import { Button, FormControl, FormGroup, FormLabel, Grid, Paper, TextField } from '@mui/material'
import { useActions } from 'common/hooks'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { selectisLoggedIn } from 'features/auth/auth.selector'
import { authThunk } from 'features/auth/auth.slice'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import { FormDataType, RegisterFormType } from 'features/auth/auth.types'

export const Register: FC = () => {
    const isLoggedIn = useAppSelector(selectisLoggedIn)
    const { registration } = useActions(authThunk)

    const { register, handleSubmit } = useForm<FormDataType>({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<RegisterFormType> = (data) => {
        const payload = {
            email: data.email,
            password: data.password,
        }
        registration(payload)
    }

    if (isLoggedIn) {
        return <Navigate to={'/login'} />
    }

    return (
        <Grid container justifyContent={'center'} style={{ marginTop: '50px' }}>
            <Paper elevation={6}>
                <Grid item style={{ width: '350px', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
                    <h2>
                        <strong>Registration</strong>
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl style={{ width: '80%' }}>
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

                                <TextField
                                    variant={'standard'}
                                    label={'Password'}
                                    margin={'normal'}
                                    type={'password'}
                                    {...register('password', {
                                        required: true,
                                    })}
                                />

                                <TextField
                                    variant={'standard'}
                                    label={'Confirm password'}
                                    margin={'normal'}
                                    type={'password'}
                                    {...register('confirmPassword', {
                                        required: true,
                                    })}
                                />

                                <Button
                                    style={{ marginTop: '20px', borderRadius: '20px' }}
                                    type={'submit'}
                                    variant={'contained'}
                                    disabled={false} /*если не валидные поля то true*/
                                    color={'primary'}>
                                    Register
                                </Button>
                            </FormGroup>
                            <FormLabel style={{ marginTop: '20px' }}>
                                <p>Allready have an account?</p>
                            </FormLabel>
                            <FormLabel style={{ marginTop: '20px' }}>
                                <Link to={'/login'}>Login</Link>
                            </FormLabel>
                        </FormControl>
                    </form>
                </Grid>
            </Paper>
        </Grid>
    )
}
