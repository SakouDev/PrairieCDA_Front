export default function Form() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
      address: event.target.address.value,
      mail: event.target.mail.value,
    }
    const JSONdata = JSON.stringify(data)
    
    const endpoint = 'http://localhost:5000/api/customer'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options)
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" required />

      <label htmlFor="mail">Mail</label>
      <input type="text" id="mail" name="mail" required />

      <button type="submit">Submit</button>
    </form>
  )
}