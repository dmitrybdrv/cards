import { Button, FormGroup, Grid, Paper, Typography } from '@mui/material'
import React, { FC, FormEventHandler, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

type PropsType = {
    title: string
    btnName: string
    description?: string
    link?: { path: string; name: string } | undefined
    onSubmit: FormEventHandler
}

export const Form: FC<PropsType & PropsWithChildren> = ({ title, btnName, description, link, onSubmit, children }) => {
    return (
        <Grid container justifyContent='center' style={{ marginTop: '50px' }}>
            <Grid item xs={3}>
                <Paper elevation={3} style={{ padding: '30px' }}>
                    <Typography
                        component={'h2'}
                        style={{ fontWeight: '600', fontSize: '26px', textAlign: 'center', marginBottom: '10px' }}>
                        {title}
                    </Typography>

                    <form onSubmit={onSubmit}>
                        <FormGroup>
                            {children}

                            <Button
                                variant={'contained'}
                                style={{ margin: '20px 0', borderRadius: '20px' }}
                                type={'submit'}>
                                {btnName}
                            </Button>

                            <Typography mt={2} align={'center'} style={{ opacity: '0.6', marginBottom: '10px' }}>
                                {description}
                            </Typography>

                            <Link
                                to={link?.path || '/'}
                                style={{
                                    width: 'fit-content',
                                    alignSelf: 'center',
                                    color: '#366dfd',
                                    fontWeight: 'bold',
                                }}>
                                {link?.name}
                            </Link>
                        </FormGroup>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}
