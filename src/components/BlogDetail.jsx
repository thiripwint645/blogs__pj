import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router'
import { api } from '../api'
import { initialState, reducer } from './reducer'
import { ActionTypes } from './reducer/ActionTypes'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { MdModeEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom'
 

const BlogDetail = () => {
    const {blogId}=useParams()

    const [state,dispatch]=useReducer(reducer,initialState)
    const selectedBlog=async ()=>{
        const res =await api.get(`/blogs/${blogId}`)
      dispatch({type:ActionTypes.SELECTED_BLOG,payload:res.data})
    }
    useEffect(()=>{
        selectedBlog()
    },[blogId])
  return (
    <>
    <Container style={{marginTop:100, width:500


    }}>
        <Row>
            <Col md='8'  className='mx-auto'>
            <Card>

            <Card.Img variant="top" src={`/assets/${state.blog.image}` } />

            
            {state.blog.date}
                <Card.Header>
                 
                    {state.blog.title}
                </Card.Header>
                <Card.Body>
                    {state.blog.description}

                </Card.Body>
  <div className=''>      <Link to={`/edit-blog/${state.blog.id}`}><button><MdModeEdit /></button></Link> 
   <button ><AiOutlineDelete /></button></div>
            </Card>
            <div>
          </div>
                
            </Col>
        
        </Row>
     
    </Container>
    
    </>
  )
}

export default BlogDetail