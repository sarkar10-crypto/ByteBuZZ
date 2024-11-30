import React from 'react'
import { useGlobalContext } from './context'

const Pageinition = () => {
  const { page, nbPages,getPrevPage,getNextPage } = useGlobalContext();
  return (
    <>
    <div className='pageination'>
      <div className='btns'>
        <button onClick={()=>getPrevPage()}>PREV</button>
        <span>{page + 1} of {nbPages}</span>
        <button onClick={()=>getNextPage()}>NEXT</button>
      </div>
    </div>
    </>
  )
}

export default Pageinition
