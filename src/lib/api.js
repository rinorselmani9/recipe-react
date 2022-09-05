import axios from 'axios'

const api = {
  call: async (endpoint, config = {}) => {
    let url = process.env.REACT_APP_API_URL + endpoint.url
    const { data, headers } = config
    
    if(config.params && config.params.length){
      config.params.forEach(elem => {
        url += `${elem}/`
      })
    }

    const request = {
      url,
      method: endpoint.method,
      data,
      headers,
    }
    try {
      const result = await axios(request)
      return result.data
    } catch (err) {
      return err.response.data
    }
  },
}
export default api
