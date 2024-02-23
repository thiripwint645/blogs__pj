
import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const NotFoundPage = () => {
    const navigate=useNavigate()
  return (
    <div className='w-full vh-100 d-flex flex-column justify-content-center align-items-center'>
  
        <h1 className='fs-1 fw-bold text-center text-dark' >Page Not Found</h1>
        
        <Button onClick={()=>navigate("/")} variant='primary'>Go Home</Button>
    
    </div>
  
  )
}

export default NotFoundPage