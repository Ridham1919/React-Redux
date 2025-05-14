import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    var message = useSelector((state)=>state.message)

    var dispatch = useDispatch()
    const handleclick = () =>{
        dispatch({
            type : "msg"
        })
    }

  return (
          <>
          <h1>{message}</h1>
          <button onClick={handleclick}>click</button>
          </>
  )
}

export default Home