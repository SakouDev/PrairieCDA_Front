import axios from "axios"
import { useEffect, useState } from "react"
import Form from "../../components/form"
import agent from "../api/agent"
import {ApiService} from "../api/axios"



export default function Menfou() {

  const [customers, setCustomers] = useState([])

  useEffect(() => {
    // ApiService.get('customer').then(response => setCustomers(response.data))
    agent.Customer.list('customer')
  }, [])

  const wé = agent.Customer.list('customer')
  console.log(wé)

  function HandleSubmit(event){
    event.preventDefault()
    const data = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      address: event.target.address.value,
      mail: event.target.mail.value,
    }
    const JSONdata = JSON.stringify(data)
    const response = agent.Customer.create(JSONdata)
    console.log(response) 
    console.log("JSON TA MERE"+JSONdata)
    
  }


  return (
    <>
        {customers.map( (customer, index) => ( 
          <ul key={index}>
            <li>{customer.firstname}</li>
            <li>{customer.lastname}</li>
            <li>{customer.address}</li>
            <li>{customer.mail}</li>
          </ul>
        ))}
    <form onSubmit={HandleSubmit} method="POST">
      <label htmlFor="firstname">First Name</label>
      <input type="text" id="firstname" name="firstname" required />

      <label htmlFor="lastname">Last Name</label>
      <input type="text" id="lastname" name="lastname" required />

      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" required />

      <label htmlFor="mail">Mail</label>
      <input type="text" id="mail" name="mail" required />

      <button type="submit">Submit</button>
    </form>

        {/* {Form()} */}

    </>
  )
}