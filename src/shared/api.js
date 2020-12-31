import axios from 'axios'

export async function getOAuthLoginURL() {
  return axios
    .get('http://localhost:3001/v1/oauth/google')
    .then((res) => res.data)
    .catch(() => {
      throw 'Error when retrieving OAuth login URL'
    })
}
