import axios from 'axios'

const api = process.env.NEXT_PUBLIC_API

axios.defaults.headers.post['Content-Type'] = 'application/json'

const publicAxios = axios.create({
  baseURL: api,
})

const token = 'lladfkasj'

const userAxios = axios.create({
  baseURL: api,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export { publicAxios, userAxios }
