import React from 'react'
import { Minus, Plus } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/counter'

export const Contact = () => {
    // useDispatch
    const dispatch = useDispatch()
    
    // useSelector
    const counter = useSelector(state => state.counter.counter)
  return (
    <div className='flex justify-center gap-3 mt-10'>
      <button 
      onClick={() => dispatch(decrement())}
      className="btn">
        <Minus />
      </button>
        <div className='text-4xl text-center'>{counter}</div>`
     <button
      onClick={() => dispatch(increment())}
      className="btn">
     
        <Plus />
      </button>
    </div>

  )
}
