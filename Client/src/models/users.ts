/*  B"H
 */

import { ref } from 'vue'
import { loadScript } from './myFetch'

export class User {
  id?: number
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  phone: string = ''
  password: string = ''
  birthDate: string = ''
  image: string = ''
  address: {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    country: string
  } = {
    address: '',
    city: '',
    state: '',
    stateCode: '',
    postalCode: '',
    country: 'United States'
  }
  role: string = 'admin'
}

const session = ref({
  user: null as User | null,
  token: '',
  message: '',
  isLoading: false
})

export const refSession = () => session

export const useLogin = () => ({
  async login(email: string, password: string) {},
  async logout() {
    session.value.user = null
  },
  async googleLogin() {
    await loadScript('https://accounts.google.com/gsi/client')

    const tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      scope: 'email',
      callback: (response: any) => {
        console.log('response', response)
        if (response.access_token) {
          session.value.token = response.access_token

          /*    
          console.log(googleUser)
              session.value.user = {
                firstName: googleUser.given_name,
                lastName: googleUser.family_name,
                email: googleUser.email
              }

              console.log(session.value.user)
            }
          })
            */
        }
      }
    })

    tokenClient.requestAccessToken({})
  }
})
