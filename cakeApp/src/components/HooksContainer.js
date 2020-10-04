import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
    return (
    <div>
      <h2>Number of cakes {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy a cake</button>
    </div>
    )
}

export default HooksContainer
