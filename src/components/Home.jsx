import React, { useEffect, useReducer, useState } from 'react'

import Blog from './Blog'
import { Container,Row,Col } from 'react-bootstrap'
import { reducer,initialState } from './reducer'
import { api } from '../api'
import { ActionTypes } from './reducer/ActionTypes'
import { HashLoader } from 'react-spinners'


const Home = () => {

 const [state,dispatch] =useReducer(reducer,initialState)
 const [isLoading,setLoading]=useState(false)
const fetchBLogs=async()=>{
    setLoading(true)
    const res=await api.get('/blogs').catch(e=>console.log(e.message))
    dispatch({type:ActionTypes.FETCH_BLOGS,payload:res.data})
    setLoading(false)
}

 useEffect(()=>{

    fetchBLogs()


 },[])

  return (
    <Container fluid style={{marginTop:"100px"}}>
 <Row>
   
{isLoading?<HashLoader color="#36d7b7" />: state.blogs.map((blog)=>(
     <Col key={blog.id} xs md="6" lg="3" className="my-3"><Blog blog={blog}/></Col>
 ))}
 </Row>
    </Container>
  )
}

export default Home