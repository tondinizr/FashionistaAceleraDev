import axios from 'axios'

export const DEFAULT_MESSAGE = {
  SUCCESS: 'Ação realizada',
  ERROR_000: 'Verifique sua conexão com a internet',
  ERROR_400: 'Não foi possível interpretar a solicitação. Verifique a sintaxe das informações enviadas',
  ERROR_401: 'Você precisa fazer login',
  ERROR_403: 'Acesso negado. Este perfil de acesso não permite a ação desejada',
  ERROR_404: 'A página ou recurso solicitado não foi encontrado',
  ERROR_422: 'A solicitação contém campos inválidos',
  ERROR_429: 'O limite de tentativas de acesso foi atingido',
  ERROR_500: 'Ocorreu um erro inesperado. Entre em contato com o atendimento caso o problema persista'
}

/**
 * @param {String} message
 * @returns {Promise<never>}
 */
const promiseReject = (message) => Promise.reject({ message }) // eslint-disable-line

class Service {
  /** Inject handleSuccess and handleError
     * @param {Promise<any>} httpClientRequest
     * @returns {Promise<any>}
     */
  static injectResponseHandlers (httpClientRequest) {
    return httpClientRequest
      .then(this.handleSuccess)
      .catch(this.handleError)
  }

  /**
     * @param {Object} res HTTP response
     * @param {String} MESSAGE
     * @returns {Promise<any>}
     */
  static handleSuccess ({ data: res }, MESSAGE = DEFAULT_MESSAGE.SUCCESS) {
    let noDataObject = !res.data && res.success ? null : res
    return Promise.resolve({
      data: res.data || noDataObject,
      message: res.message || MESSAGE
    })
  }

  /**
     *  handle Request/Response Errors
     * @param {Object} err HTTP response Error
     * @param {String} MESSAGE
     * @returns {Promise<never>} Promise.reject(error)
     */
  static handleError (err, MESSAGE = DEFAULT_MESSAGE.ERROR_000) {
    // log error
    if (process.browser) console.error(err)
    if (err.response) {
      // Unknow Error / Server Error
      if (!err.response.status) {
        return promiseReject('Verifique sua conexão com internet.', 0)
      } // eslint-disable-line
      // The request was made and the server responded with a status code
      else if (err.response.data) {
        let { data } = err.response

        if (data && data.message) {
          const { message } = data
          return promiseReject(message)
        } else {
          let { status } = err.response
          if (status === 400) { return promiseReject(DEFAULT_MESSAGE.ERROR_400) }
          if (status === 401) { return promiseReject(DEFAULT_MESSAGE.ERROR_401) }
          if (status === 403) { return promiseReject(DEFAULT_MESSAGE.ERROR_403) }
          if (status === 404) { return promiseReject(DEFAULT_MESSAGE.ERROR_404) }
          if (status === 422) { return promiseReject(DEFAULT_MESSAGE.ERROR_422) }
          if (status === 429) { return promiseReject(DEFAULT_MESSAGE.ERROR_429) }
          if (status === 500) { return promiseReject(DEFAULT_MESSAGE.ERROR_500) }
        }
      }
    }

    // The request was made but no response was received
    if (err.request && process.browser) console.error(err.request)

    // Something happened in setting up the request that triggered an Error
    else if (process.browser) console.error(err.message)

    return promiseReject(MESSAGE)
  }
}

const $axiosInstance = axios.create({ baseURL: 'https://5e9935925eabe7001681c856.mockapi.io/api/v1' })

$axiosInstance.interceptors.response.use(function (response) {
  return Service.handleSuccess(response)
}, function (error) {
  return Service.handleError(error)
})

// let { data } = $axiosInstance.post('/login', { login: 'jimmybastos@yandex.com', new_password: '123456' })
// console.log(data)

Service.$axios = $axiosInstance

export { $axiosInstance }

export default Service
