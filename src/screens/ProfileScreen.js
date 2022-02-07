import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ProfileScreen = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
      const userLogin = useSelector((state) => state.userLogin)
    const { userInfo  } = userLogin
    if(!userInfo) {
        navigate('/login');
    }
    useEffect(() => {
        if (!userInfo) {
          navigate('/login')
          } else {
            setName(userInfo.user.username)
            setEmail(userInfo.user.email)
          }
        }
      , [ navigate , userInfo ])
  return (
      <Row>
          <Col md={3}>
              <Form>
              <Image
                src={userInfo.user.avatar}
                alt={userInfo.user.username}
                fluid
                rounded
                thumbnail
              />
               <Form.Group controlId='name'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
        <Form.Group className='py-3' >
            {userInfo.user.isEmailVerified ? <h1> Email Verified </h1> : (
               <>
                <p style={{ color: 'red' }}>Your Email haven't been verified</p>
                <Button variant='primary'> Verified Email</Button>
               </>
            )}
        </Form.Group>
              </Form>
          </Col>
      </Row>
  )
  ;
};

export default ProfileScreen;
