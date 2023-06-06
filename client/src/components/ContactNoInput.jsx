import React from "react";
import Grid from '@mui/material/Grid';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function ContactNoInput(props) {
    return (
        <Grid item xs={12}>
            <PhoneInput
                isValid={(value, country) => {
                    if (!(value.match(/^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/))) {
                        return "Invalid phone number";
                    } 
                    else {
                        return true;
                    }
                }}
                inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true
                }}
                country={'my'}
                countryCodeEditable={false}
                onChange={props.onUpdate}

            />
        </Grid>
    )
}

export default ContactNoInput;