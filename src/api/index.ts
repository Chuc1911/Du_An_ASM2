import axios from "axios";
const Instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers:{
        'Content-Type': 'application/json'

    },
	timeout: 1000

})
export default Instance
