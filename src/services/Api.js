import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:3000/`,
    timeout: 1000,
    headers: {'X-Custom-Header': 'Simples4'}
  })
}
