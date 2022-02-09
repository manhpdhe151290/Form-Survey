import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer(props) {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center'>
            <div>Contact for us</div>
            <i className='fab fa-facebook-f m-2'></i>
            <i class='fab fa-twitter m-2'></i>
            <i class='fab fa-linkedin-in m-2'></i>
            <i class='fab fa-github m-2 '></i>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
