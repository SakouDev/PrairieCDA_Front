import axios, { AxiosResponse } from "axios";

const sleep = (delay) => {
    return new Promise((resolve) =>{
        setTimeout(resolve, delay)
    })
}


axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(async response =>{
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody =  (response) => response.data;

const requests = {
    get:  (url, params) => axios.get(url, {params}).then(responseBody),
    post:  (url, body) => axios.post(url, body).then(responseBody),
    put:  (url, body) => axios.put(url, body).then(responseBody),
    del:  (url) => axios.delete(url).then(responseBody),
}

const Customer = {
    list : (params) => requests.get('/customer', params),
    details: (id) => requests.get(`/customer/${id}`),
    create: () => axios.post('/customer'),
    update: (customer) => axios.put(`/customer/${customer.id}`),
    delete: (id) => axios.delete(`/customer/${id}`),
}

const agent = {
    Customer
}

export default agent;