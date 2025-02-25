import React from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_BOOKS = gql`
  query GetBooksQuery {
    books {
      name
      id
    }
  }
`

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS)

  if (loading) return <p>Loading books...</p>
  if (error) return <p>Error : {error.message}</p>
  const displayBooks = () => {
    return data.books.map(book => <li key={book.id}>{book.name}</li>)
  }

  return (
    <div>
      <ul id='book-list'>{displayBooks()}</ul>
    </div>
  )
}

export default BookList
