import React from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_Authors = gql`
  query GetAuthorsQuery {
    authors {
      name
      id
    }
  }
`

function AddBook() {
  const { loading, error, data } = useQuery(GET_Authors)
  if (loading) return <option disabled>Loading Authors...</option>
  if (error) return <p>Error : {error.message}</p>
  const displayAuthors = () =>
    data.authors.map(author => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ))

  return (
    <div>
      <form id='add-book'>
        <div className='field'>
          <label>Book name:</label>
          <input type='text' />
        </div>

        <div className='field'>
          <label>Genre:</label>
          <input type='text' />
        </div>

        <div className='field'>
          <label>Author:</label>
          <select>
            <option>Select author</option>
            {displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    </div>
  )
}

export default AddBook
