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
    localStorage.setItem('user', JSON.stringify(response.data.user))
    localStorage.setItem('token', response.data.token)
  },
}

export default UsersService
