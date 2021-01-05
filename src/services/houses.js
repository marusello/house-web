import api from './api';

export default {
  listar:() => {
    return api.get('houses')
  },

  salvar:(house) => {
    return api.post('houses', house)
  },

  login:(user) => {
    return api.post('sessions', user)
  }
}