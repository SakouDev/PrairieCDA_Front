import React, { useEffect, useState } from 'react'
import { ApiService } from './api/axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import NavBar from '../components/navbar/nav';
import FormAnimal from '../components/forms/formAnimals';


function customer() {
    const [animals, setAnimals] = useState([])

    useEffect(() => {
        ApiService.get('animals').then(response => setAnimals(response.data))
    },[])

    console.log(animals)

  return (
    <>
        <NavBar/>
        <Container>

            <br/>
            <FormAnimal/>

            <h1>ANIMAL : </h1>

            {animals.map( (animals, index) => (
                <>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {animals.name}, {animals.race},
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {animals.birthdate}, 
                                {animals.dead ? 'Dead' : 'Alive'},
                                {animals.specie}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Update</Button>
                            <Button size="small" onClick={() => (ApiService.delete('animals', animals.id))}>Delete</Button>
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