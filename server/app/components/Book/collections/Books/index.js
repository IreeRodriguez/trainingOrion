import {Collection} from '@orion-js/app'
import Book from 'app/components/Book/models/Book'

export default new Collection({
  name: 'books',
  model: Book,
  indexes: [],
})
