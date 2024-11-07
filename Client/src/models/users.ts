/*  B"H
 */

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
