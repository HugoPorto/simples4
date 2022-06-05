import Api from '@/services/Api'

export default {
  index () {
    return Api().get('usuarios')
  },
  login (params) {
    return Api().post('login', params)
  },
}
