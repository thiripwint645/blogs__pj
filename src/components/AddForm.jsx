import React, { useReducer, useState } from 'react'
import { Container, Row,Card,Form,Col, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';
import { api } from '../api';
import { Navigate, useNavigate } from 'react-router';
import { initialState, reducer } from './reducer';
import { ActionTypes } from './reducer/ActionTypes';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const AddForm = () => {
    const navigate=useNavigate()
    const [isLoading,setLoading]=useState(false)
   const [state,dispatch]= useReducer(reducer,initialState)


   
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit= async data=>{
        setLoading(true)
        data={id : uuidv4(),...data}
      const  res=await api.post("/blogs",data)
      dispatch({type:ActionTypes.ADD_BLOG,payload:res.data})
      setLoading(true)
      navigate("/")
        
      }
  return (
  <Container style={{
    marginTop:100
  }}>
    <Row>
        <Col>
        <Card>
            <Card.Header>Add New Blog</Card.Header>
            <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="blog.title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title"{...register("title",{required:"This field is required"})} />
      </Form.Group>
      {errors.title && <p className='text-danger' role='alert'>{errors.title?.message}</p>}
      <Form.Group className="mb-3" controlId="blog.description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} {...register("description",{required:"This field is required"})} />
      </Form.Group>
      {errors.description&& <p className='text-danger' role='alert'>{errors.description?.message }</p>}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem label="Mobile variant">
  <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
</DemoItem>
    </LocalizationProvider>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" {...register("image",{required:"This field is required"})}/>
      </Form.Group>
      {errors.image&& <p className='text-danger' role='alert'>{errors.image?.message }</p>}



      {isLoading?  <Button type='submit' variant='dark' disabled>Add Blog</Button>:  <Button type='submit' variant='dark'>Add Blog</Button>}
    
    </Form>
            </Card.Body>
        </Card>
        </Col>
    </Row>
  </Container>
  )
}

export default AddForm