import { FormGroup, Grid, Paper } from '@mui/material'
import { AnnotationField } from 'common/components/form/anotation-field/AnotationField'
import { Btn } from 'common/components/form/button/Btn'
import { LinkField } from 'common/components/form/link-field/LinkField'
import { TypographyField } from 'common/components/form/typography-field/TypographyField'
import React, { FC, FormEventHandler, PropsWithChildren } from 'react'

type PropsType = {
    title: string
    btnName: string
    description?: string
    link?: { path: string; name: string } | undefined
    onSubmit: FormEventHandler
    onButtonRedirect?: string
}
/**
 * Form - принимает на вход набор свойств, описывающих форму, и дочерние компоненты, которые будут отображаться внутри формы.
 * @param title - заголовок формы
 * @param btnName - имя кнопки
 * @param description - текст - описание чего либо в форме (опционально)
 * @param {path: string; name: string} link - ссылка на переданный путь (опционально)
 * @param onSubmit - функция отправки формы
 * @param children - дочерние компоненты формы
 * @param onButtonRedirect - строка - ссылка в формате строки для перенаправлении по клику на кнопку (опционально)
 */
export const Form: FC<PropsType & PropsWithChildren> = ({
    title,
    btnName,
    description,
    link,
    onSubmit,
    children,
    onButtonRedirect,
}) => {
    return (
        <Grid container justifyContent='center' style={{ marginTop: '50px' }}>
            <Grid item xs={4}>
                <Paper elevation={3} style={{ padding: '30px' }}>
                    <TypographyField title={title} />

                    <form onSubmit={onSubmit}>
                        <FormGroup>
                            {children}
                            <Btn btnName={btnName} onButtonRedirect={onButtonRedirect} />
                            <AnnotationField description={description} />
                            <LinkField link={link} />
                        </FormGroup>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}
