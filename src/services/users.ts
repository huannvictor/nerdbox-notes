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
  currentUser: () => {
    const userData = localStorage.getItem('user')
    const user = userData && JSON.parse(userData)
    return user
  },

  register: (registerData: registerDataProps) =>
    Api.post('/users/register', registerData),

  login: async (loginData: loginDataProps) => {
    const response = await Api.post('/users/login', loginData)
    localStorage.setItem('user', JSON.stringify(response.data.user))
    localStorage.setItem('token', response.data.token)
  },

  logout: () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  },
}

export default UsersService
