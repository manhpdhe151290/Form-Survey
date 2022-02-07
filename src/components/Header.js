import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo  } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
    navigate('/login')
  }
  return <header>
    
       <Navbar  expand='lg' collapseOnSelect className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container>
        <LinkContainer to='/'>
            <Navbar.Brand>Quizziz</Navbar.Brand>
          </LinkContainer>
          <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>    
            {userInfo ? (
                <NavDropdown title={userInfo.user.username} id='username' style={{color:'#fff'}}>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}                 
                {userInfo && userInfo.user.role === 'admin' && (<NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/questionlist'>
                    <NavDropdown.Item>Questions</NavDropdown.Item>
                  </LinkContainer>
                
                </NavDropdown>)}
                

            </Nav>
          </Navbar.Collapse>
       </Container>
      </Navbar>
      </header>
};

export default Header;
