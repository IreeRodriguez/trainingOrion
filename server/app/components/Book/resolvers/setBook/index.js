import {resolver} from '@orion-js/app'
import Book from 'app/components/Book/models/Book'
import Books from 'app/components/Book/collections/Books'

export default resolver({
  params: {
    author: {
      type: String,
    },
    title: {
      type: String,
    },
    year: {
      type: Number,
    },
  },
  returns: Book,
  mutation: true,
  async resolve(params, viewer) {
    const bookId = await Books.insertOne(params)
    return Books.findOne(bookId)
  },
})
