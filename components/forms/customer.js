import {ApiService} from "../../pages/api/axios"

export default function FormCustomer() {

    function HandleSubmit(event){
        event.preventDefault()
        const data = {
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        address: event.target.address.value,
        mail: event.target.mail.value,
        }
        const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data : data,
        }
        ApiService.post('customer', data)
    }

    return (
        <>
        <form onSubmit={HandleSubmit} method="POST" >
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
        </>
    )
}