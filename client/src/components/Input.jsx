import React from 'react';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { kebabCase } from 'lodash';

function Input(props) {
    return (
        <Grid item xs={12}>
            <FormControl fullWidth>
                <InputLabel htmlFor={kebabCase(props.name.name)}>{props.name.name}</InputLabel>
                <OutlinedInput
                    id={kebabCase(props.name.name)}
                    startAdornment={<InputAdornment position="start">RM</InputAdornment>}
                    label={props.name.name}
                    type='number'
                    onChange={props.onUpdate}
                    value={props.name.amount}
                />
            </FormControl>
        </Grid>
    )
}

export default Input;