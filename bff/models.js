import axios from 'axios'

class Cms {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000' // json-server endpoint
    })
  }

  homepage() {
    return this.api.get('/homepage').then(res => res.data)
  }

  faqs() {
    return this.api.get(`/faqs`).then(res => res.data)
  }
}

export default new Cms()
