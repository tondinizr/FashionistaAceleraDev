import Service from './Service'

export class ProductService extends Service {
  static getProducts() {
    return this.$axios.get('/catalog')
  }
}