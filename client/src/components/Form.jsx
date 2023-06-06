
import React, {useState} from 'react';

import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import Input from './Input.jsx';
import DatePickerInput from './DatePickerInput';
import ContactNoInput from './ContactNoInput';
import AddMoreBtn from './AddMoreBtn';
import SubmitButton from './SubmitButton';
// import { camelCase, kebabCase } from 'lodash';

import axios from 'axios';

function Form() {

    const [payments, updatePayment] = useState([
        {id: "rental", name: "Rental", amount: ""}, 
        {id: "internet",name: "Internet", amount: ""}, 
        {id: "tnb",name: "TNB", amount: ""}, 
        {id: "pba",name: "PBA", amount: ""}
    ]);

    const [contactNo, updateContactNo] = useState("");
    const [monthYear, updateMonthYear] = useState("");

    function handleDateChange(event){
        const year = new Date(event).getFullYear();
        const month = new Date(event).toLocaleString('default', { month: 'long' });

        updateMonthYear(month + " " + year);
    }

    function handleContactNoChange(event){
        updateContactNo(event);
    }

    // onChange method for payment amount
    function handleChange(event){
        const {id, value} = event.target;
        updatePayment(values=>{
            return values.map((obj)=>{
                if (obj.id === id){
                    obj.amount = value;
                }
                return obj;
            })
            //return {...values, [camelCase(id)]: value};
        }) 
    }

    // add new payment details (title)
    function addPayment(paymentInfo){
        updatePayment((prevList)=>{
            return [...prevList, paymentInfo];
        })
    }

    // send POST request to server
    function handleClick(event){
        console.log(payments);
        console.log(monthYear);
        console.log(contactNo);
        axios.post('http://localhost:8000/',{
            contactNo: contactNo,
            monthYear: monthYear,
            payments: payments,
        })
        .then(response=>{
            console.log(response);
        }).catch(error=>{
            console.log(error);
        });
        event.preventDefault();
    }

    return (
        <form onSubmit={handleClick}>
            <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center" >
                <DatePickerInput onUpdate={handleDateChange}/>
                <ContactNoInput onUpdate={handleContactNoChange}/>
                <Divider sx={{ mt: 2, typography: 'body1' }}>Payment Details</Divider>
                {payments.map((payment, index)=>{
                    
                    return (
                        <Input name={payment} key={index} id={index} onUpdate={handleChange}/>
                    )
                })}
                <AddMoreBtn addPayment={addPayment}/>
                <SubmitButton/>
            </Grid>
        </form>
    )
}

export default Form;