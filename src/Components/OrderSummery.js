import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummery() {
    const navigate = useNavigate()
  return (
    <>
      Order Confirmed
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </>
  )
}

export default OrderSummery
