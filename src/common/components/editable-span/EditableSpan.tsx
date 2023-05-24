import { TextField } from '@mui/material'
import React, { ChangeEvent, FC, useState } from 'react'


type PropsType = {
    value: string
    onChange: (newValue: string) => void
    icon: JSX.Element
    style?:  React.CSSProperties
}

export const EditableSpan: FC<PropsType> = ({value, onChange, icon, style}) => {
    const defaultStyle = {marginBottom: '10px', ...style}
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
            editMode
            ? <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} variant={'standard'} />
            : <span onDoubleClick={activateEditMode} style={defaultStyle}>{value} {icon && <i>{icon}</i>}</span>
    )
}