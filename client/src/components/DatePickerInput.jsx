import React from "react";
import Grid from '@mui/material/Grid';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function DatePickerInput(props) {
    return (
        <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                name="monthYear" 
                label={'Month/Year'} 
                views={['year','month']} 
                slotProps={{ textField: { fullWidth: true } }}
                onChange={props.onUpdate}
                />
            </LocalizationProvider>
        </Grid>
    )
}

export default DatePickerInput;