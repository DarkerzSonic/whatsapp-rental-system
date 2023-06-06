import React, {useState} from 'react';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { kebabCase } from 'lodash';

function AddMoreBtn(props) {

    const [open, setOpen] = useState(false);
    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [paymentDetail, setPaymentDetail] = useState({id: "", name: "", amount: ""});

    function handleChange(event){
        const {id, value} = event.target;
        
        setPaymentDetail(prevValue=>{
            return (
                {...prevValue, [(id)]: value, id: kebabCase(value)}
            )
        });
        console.log(paymentDetail)
    }

    return (
        <div>
            <Zoom in={true}>
                <Fab color="primary" aria-label="add" sx={{ m: 1, ml: 2 }}
                    onClick={() => {
                        handleClickOpen();
                        //props.addPayment("Test");
                    }}>
                    <AddIcon />
                </Fab>

            </Zoom>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Payment</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add New Payment Title
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Payment Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={paymentDetail.name}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={()=>{
                        props.addPayment(paymentDetail);
                        setPaymentDetail({id: "", name: "", amount: ""});
                        handleClose();
                    }}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddMoreBtn;