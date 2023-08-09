import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
   const navigate =  useNavigate()
  return (
    <>
      Home Page
      <button onClick={()=>navigate('order-summery')}>Please order</button>
      {/* <button onClick={()=>navigate('order-summery',{replace:true})}>Please order</button> */}
    </>
  )
}

export default Home
