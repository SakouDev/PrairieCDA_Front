import {ApiService} from "../../pages/api/axios"

export default function FormAnimal() {

    function HandleSubmit(event){
        event.preventDefault()
        const data = {
            customerid: Number(event.target.customerid.value),
            name: event.target.name.value,
            race: event.target.race.value,
            dead: Boolean(event.target.dead.value),
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data : data,
        }
        ApiService.post('animal', data)
    }

    return (
        <>
            <form onSubmit={HandleSubmit} method="POST" >
                <label htmlFor="customerid">CustomerID</label>
                <input type="text" id="customerid" name="customerid" required />
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="race">Race</label>
                <input type="text" id="race" name="race" required />
                <label htmlFor="dead">Dead?</label>
                {/* <input type="checkbox" id="dead" name="dead" value = "true" /> */}
                <input
                    type="checkbox"
                    id="dead"
                    name="dead"
                    defaultChecked={true}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}