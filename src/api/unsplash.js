import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 
            'Client-ID j_UdKkiADmgDSH3fON_9CcB4iwOhQV3aPBbYzeiBgrg'
        }   
})