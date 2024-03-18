import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export function SuccessfullAlert () {
    return (
        <Alert sx={{position: 'absolute', top: '24px', right: '24px', width: '300px'}} icon={<CheckIcon fontSize="inherit" />} severity="success">
            Малумот ижобий қўшилди!
        </Alert>
    )
}

export function ErrorAlert () {
    return (
        <Alert sx={{position: 'absolute', top: '24px', right: '24px', width: '300px'}}  severity="error">
            Амалиёт қониқарсиз якунланди!
        </Alert>
    )
}

export function EditAlert () {
    return (
        <Alert sx={{position: 'absolute', top: '24px', right: '24px', width: '300px'}} icon={<CheckIcon fontSize="inherit" />} severity="warning">
            Малумот Тахрирланди!
        </Alert>
    )
}

export function DeleteAlert () {
    return (
        <Alert sx={{position: 'absolute', top: '24px', right: '24px', width: '300px'}} icon={<CheckIcon fontSize="inherit" />} severity="warning">
            Малумот Ўчирилди!
        </Alert>
    )
}