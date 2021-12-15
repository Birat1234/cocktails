import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktails, loading} = useGlobalContext();
  console.log(cocktails);

  if(loading){
    return <Loading/>
  }
  if(cocktails.length < 1){
    return (
      <h2 className="section-title">
          no cocktail found
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>
        cocktail component
      </h2>
      <div className='cocktails-center'>
        {cocktails.map((i)=>{
          return <Cocktail id={i.id} {...i}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList
