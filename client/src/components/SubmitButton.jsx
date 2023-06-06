import React from "react";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function SubmitButton(){

    return (
        <Grid item xs={12} sx={{mb:1}}>
            <Button type="submit" fullWidth variant="contained" endIcon={<SendIcon />}>
              Send Payment
            </Button>
          </Grid>
    )
}

export default SubmitButton;