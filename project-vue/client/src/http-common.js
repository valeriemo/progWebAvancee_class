import axios from 'axios'

export default axios.create({
  // connecter avec port server
  baseURL: 'http://localhost:8082/api',
  headers: {
    'Content-type': 'application/json'
  }
})
