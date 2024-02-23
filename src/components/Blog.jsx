
import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Blog = ({blog}) => {
  return (
    <div>  <Card style={{ width: '18rem' }}>



    <Card.Body>
      <Card.Title>{blog.title}</Card.Title>
      <Card.Img variant="top" src={`/assets/${blog.image}`} />
      <Card.Text>
   {blog.date}
      </Card.Text>
      <Card.Text>
   {blog.description.substring(0,200)+ "..."}
      </Card.Text>
      <Link className="btn btn-primary" to={`blogs/${blog.id}`}>View</Link>
    </Card.Body>
  </Card>
  
  </div>
  )
}

export default Blog