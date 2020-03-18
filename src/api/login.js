import axios from './index'

export const login = (user) => {
  console.log(user);

  return axios.request({
    url: 'login',
    method: "post",
    data: {
      username: user.username,
      password: user.password
    }
  })
}
