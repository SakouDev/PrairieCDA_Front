import { useEffect, useState } from "react"
import FormAnimal from "../../components/forms/animal"
import FormCustomer from "../../components/forms/customer"
import {ApiService} from "../api/axios"

export default function Menfou() {
  const [customers, setCustomers] = useState([])
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    ApiService.get('customer').then(response => setCustomers(response.data))
    ApiService.get('animal').then(response => setAnimals(response.data))
  }, [])

  return (
    <>
      <FormCustomer/>
      <FormAnimal/>

      <h1>CUSTOMER : </h1>
      {customers.map( (customer, index) => ( 
        <ul key={index}>
          <li>{customer.firstname}, {customer.lastname}, {customer.address}, {customer.mail}</li>
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