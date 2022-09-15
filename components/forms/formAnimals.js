import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material"
import { Box } from "@mui/system"
import React from 'react'
import { ApiService } from "../../pages/api/axios"

export default function FormAnimal() {

    function HandleSubmit(event){
        event.preventDefault()
        const data = {
            customerid: Number(event.target.customerid.value),
            name: event.target.name.value,
            race: event.target.race.value,
            dead: Boolean(event.target.dead.value),
            birthdate: event.target.birthdate.value,
            specie: event.target.specie.value
        }
        ApiService.post('animals', data)
    }

    return (
        <>
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
                        label="CustomerID"
                        type="text"
                        name="customerid"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        type="text"
                        name="name"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Race"
                        type="text"
                        name="race"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="BirthDate"
                        type="text"
                        name="birthdate"
                    />  
                    <TextField
                        required
                        id="outlined-required"
                        label="Specie"
                        type="text"
                        name="specie"
                    />                 
                    <Checkbox
                        id="dead" 
                        name="dead"
                        label="Alive ?"
                    />
                
                </CardContent>
                <CardContent>
                    <Button variant="contained" color="success" type="submit">
                        Success
                    </Button>
                </CardContent>
            </Box>
        </Card>
        </>
    )
}