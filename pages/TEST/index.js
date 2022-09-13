import { useEffect, useState } from "react"
import FormAnimal from "../../components/forms/animals"
import FormCustomer from "../../components/forms/customers"
import {ApiService} from "../api/axios"

export default function Menfou() {
  const [customers, setCustomers] = useState([])
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    ApiService.get('customers').then(response => setCustomers(response.data))
    ApiService.get('animals').then(response => setAnimals(response.data))
  }, [])

  return (
    <>
      <FormCustomer/>
      <FormAnimal/>

      <h1>CUSTOMER : </h1>
      {customers.map( (customers, index) => ( 
        <ul key={index}>
          <li>{customers.firstname}, {customers.lastname}, {customers.address}, {customers.mail}</li>
        </ul>
      ))}
      
      <h1>ANIMAL : </h1>
      {animals.map( (animals, index) => ( 
        <ul key={index}>
          <li>{animals.customerid}, {animals.name}, {animals.race}, {animals.dead}</li>
        </ul>
      ))}
    </>
  )
}