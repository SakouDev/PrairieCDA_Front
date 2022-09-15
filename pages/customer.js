import React, { useEffect, useState } from 'react'
import FormCustomer from '../components/forms/formCustomer'
import { ApiService } from './api/axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import NavBar from '../components/navbar/nav';


function customer() {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        ApiService.get('customers').then(response => setCustomers(response.data))
    },[])


  return (
    <>
        <NavBar/>
        <Container>

            <br/>
            <FormCustomer/>

            <h1>CUSTOMER : </h1>

            {customers.map( (customers, index) => (
                <>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {customers.firstname}, {customers.lastname}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {customers.address}, 
                            {customers.mail}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Update</Button>
                        <Button size="small" onClick={() => (ApiService.delete('customers', customers.id))}>Delete</Button>
                    </CardActions>
                    </Card>
                    <br/>
                </>
            ))}
        </Container>
    </>
  )
}

export default customer