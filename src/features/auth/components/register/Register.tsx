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
import { useRedirect } from 'common/hooks/useRedirect'
import { authThunk } from 'features/auth/auth.slice'
import { FormDataType } from 'features/auth/auth.types'
import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export const Register: FC = () => {
    const [visible, setVisible] = useState(false)

    const { registration } = useActions(authThunk)
    const { register, handleSubmit } = useForm<FormDataType>({
        defaultValues: {
            email: '',
            password: '',
            passConfirm: '',
        },
    })
    useRedirect()

    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        registration(data)
    }

    return (
        <Grid container justifyContent={'center'} style={{ marginTop: '50px' }}>
            <Paper elevation={6}>
                <Grid item style={{ width: '350px', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
                    <h2>
                        <strong>Registration</strong>
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl sx={{ width: '30ch' }}>
                            <FormGroup>
                                <FormControl variant='standard'>
                                    <TextField
                                        variant={'standard'}
                                        label={'Email'}
                                        margin={'normal'}
                                        type={'email'}
                                        {...register('email', {
                                            required: true,
                                        })}
                                    />
                                </FormControl>

                                <FormControl>
                                    <InputLabel htmlFor='password'>Password</InputLabel>
                                    <Input
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton onClick={() => setVisible(!visible)}>
                                                    {visible ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        id={'password'}
                                        type={visible ? 'text' : 'password'}
                                        {...register('email', {
                                            required: true,
                                        })}
                                    />
                                </FormControl>
                                <Button
                                    style={{ marginTop: '60px', borderRadius: '20px' }}
                                    type={'submit'}
                                    variant={'contained'}
                                    disabled={false}
                                    color={'primary'}>
                                    Register
                                </Button>
                            </FormGroup>
                            <FormLabel style={{ marginTop: '30px' }}>
                                <p>Already have an account?</p>
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
