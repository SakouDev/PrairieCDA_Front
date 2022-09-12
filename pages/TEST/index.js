import axios from "axios"
import requests from "../api/axios"



export default function Menfou() {

  console.log(agent.Customer.list())
  const response =  requests.get('customer').then(response => console.log(response))

  return (
    <>

      <h1>ON APPEL SA UNE DOUILLE</h1>

    </>
  )
}