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

type updateUserNameProps = {
  newName: string
  email: string
}

type updateUserPasswordProps = {
  newPassWord: string
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

  update: async (params: updateUserNameProps) => {
    const response = await Api.put('/users', params, {
      headers: {'x-access-token': localStorage.getItem('token')}
    })

    localStorage.setItem('user', JSON.stringify(response.data))
  }, 

  updatePassword:async (params:updateUserPasswordProps) => {
    await Api.put('/users/password', params, {
      headers: {'x-access-token': localStorage.getItem('token')}
    })
  },

  delete: async () => {
    await Api.delete('/users', {
      headers: {'x-access-token': localStorage.getItem('token')}
    })

    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }
}

export default UsersService
