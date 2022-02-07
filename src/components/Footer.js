import React from 'react';
import { Container, Row ,Col } from 'react-bootstrap';



function Footer(props) {
    return (
        <footer>
                <Container>
            <Row>
                <Col className='text-center'>
                    <div>Contact for us</div>
                  
                </Col>
            </Row>
                </Container>
        </footer>
    );
}

export default Footer;