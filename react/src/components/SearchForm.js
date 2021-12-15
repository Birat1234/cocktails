import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchterms} = useGlobalContext()
  const searchBar = React.useRef('')

  const searchCocktail = () => {
      setSearchterms(searchBar.current.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input type="text" id="name" ref={searchBar} onChange= {searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
