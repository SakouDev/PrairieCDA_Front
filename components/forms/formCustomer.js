import { Card, CardContent, Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
import React from 'react'
import { ApiService } from "../../pages/api/axios"

export default function FormCustomer() {

    function HandleSubmit(event){
        event.preventDefault()
        const data = {
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        address: event.target.address.value,
        mail: event.target.mail.value,
        }
        ApiService.post('customers', data)
    }

  return (
    <Card>
        <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={HandleSubmit}
            >
        <CardContent>
                <TextField
                required
                id="outlined-required"
                label="FirstName"
                type="text"
                name="firstname"
                />
                <TextField
                required
                id="outlined-required"
                label="LastName"
                type="text"
                name="lastname"
                />
                <TextField
                required
                id="outlined-required"
                label="Address"
                type="text"
                name="address"
                />
                <TextField
                required
                id="outlined-required"
                label="Mail"
                type="text"
                name="mail"
                />
            
        </CardContent>
        <CardContent>
            <Button variant="contained" color="success" type="submit">
                Success
            </Button>
        </CardContent>
        </Box>
    </Card>
  )
}
