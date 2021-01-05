import axios from 'axios'

export const getData = async (param) => {
    
    try {
        const config = {
          url: 'http://localhost:9000/trips'+param ,
          method: 'get'
        }
        const response = await axios.request(config)
        return response.data
      } catch (error) {
        console.log(error)
        return error
      }
}
