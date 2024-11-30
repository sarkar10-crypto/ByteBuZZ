import React, { useState } from 'react'
import { useGlobalContext } from './context';

const Search = () => {
  

  const { query, searchPost } = useGlobalContext();

  

  
  return (
    
    <>
      <form onSubmit={(e)=>e.preventDefault()}>
    <div className='search'>
          <input type='text' placeholder='Search Here'
            onChange={(e) => searchPost(e.target.value)}
            value={query} />
    </div>
    </form>
    </>
  )
}

export default Search
