import Api from './api'

type registerDataProps = {
  name: string
  email: string
  password: string
}

type loginDataProps = {
  email: string
  password: string
}

const UsersService = {
  register: (registerData: registerDataProps) =>
    Api.post('/users/register', registerData),

  login: async (loginData: loginDataProps) => {
    const response = await Api.post('/users/login', loginData)
    sessionStorage.setItem('user', JSON.stringify(response.data.user))
    sessionStorage.setItem('token', response.data.token)
  },

  logout: () => {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('token')
  },

  isUserAuthenticated: (): boolean => {
    if (typeof window !== 'undefined') {
      const userToken = sessionStorage.getItem('token')
      return !!userToken
    }

    return false
  },
}

export default UsersService
