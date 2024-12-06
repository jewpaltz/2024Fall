/*  B"H
 */

import { ref } from 'vue'
import { loadScript, rest } from './myFetch'

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
      scope:
        'email ' +
        'profile ' +
        'https://www.googleapis.com/auth/contacts.readonly ' +
        'https://www.googleapis.com/auth/photoslibrary.readonly',
      callback: async (response: any) => {
        console.log('response', response)
        if (response.access_token) {
          session.value.token = response.access_token

          const googleUser = await rest<any>(
            'https://www.googleapis.com/oauth2/v1/userinfo',
            undefined,
            'GET',
            {
              Authorization: `Bearer ${response.access_token}`
            }
          )

          console.log(googleUser)
          session.value.user = {
            firstName: googleUser.given_name,
            lastName: googleUser.family_name,
            email: googleUser.email,
            image: googleUser.picture
          }

          console.log(session.value.user)
        }
      }
    })

    tokenClient.requestAccessToken({})
  }
})

export async function getGoogleContacts() {
  const contacts = await rest<any>(
    'https://people.googleapis.com/v1/people/me/connections?personFields=names,emailAddresses,phoneNumbers,photos',
    undefined,
    'GET',
    {
      Authorization: `Bearer ${session.value.token}`
    }
  )

  console.log({ contacts })
  return contacts
}

export async function getGooglePhotos() {
  const photos = await rest<any>(
    `https://photoslibrary.googleapis.com/v1/mediaItems?pageSize=100`,
    undefined,
    undefined,
    {
      Authorization: `Bearer ${session.value.token}`
    }
  )
  console.log({ photos })
  return photos
}
