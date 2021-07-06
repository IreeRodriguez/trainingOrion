import {resolver} from '@orion-js/app'
import Book from 'app/components/Book/models/Book'
import Books from 'app/components/Book/collections/Books'

export default resolver({
  params: {},
  returns: [Book],
  async resolve(params, viewer) {
    return Books.find().toArray()
  },
})
