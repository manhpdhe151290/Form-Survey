import React, { useEffect, useState , useRef } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const ProfileScreen = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false);
    const [avatarImg, setAvartarImg] = useState("");
    const [userData, setUserData] = useState({});
      const userLogin = useSelector((state) => state.userLogin)
    const { userInfo  } = userLogin
    const id = userInfo ? userInfo.user.id : "";
    const token = userInfo ? userInfo.tokens.access.token : "";
    const ref = useRef();
    if(!userInfo) {
        navigate('/login');
    }
      useEffect(() => {
        if (userInfo && token && id) {
          const config = { Authorization: `Bearer ${token}` };
          axios
            .get(`https://fwaec-survey.herokuapp.com/v1/users/${id}`, {
              headers: config,
            })
    
            .then((res) => {
              setUserData(res.data);
              setAvartarImg(res.data.avatar);
            });
        }
      }, []);
      const handleToggle = () => {
        setToggle(!toggle);
      };
      const resetInput = () => {
        ref.current.value = "";
      };
      const handleChangeImg = (e) => {
        const value = e.target.files[0];
    
        if (value) {
          const formData = new FormData();
          formData.append("file", value);
          console.log(formData);
    
          axios
            .post("https://fwaec-survey.herokuapp.com/v1/file/upload", formData)
            .then((res) => {
              setAvartarImg(res.data.imagePath);
              resetInput();
            });
        }
      };
    
      const handleSubmit = () => {
        if (userInfo) {
          const id = userInfo.user.id;
          const config = { Authorization: `Bearer ${token}` };
          const newUser = {
            email: userInfo.email,
            name: userInfo.username,
            avatar: avatarImg,
          };
         axios
            .patch(`https://fwaec-survey.herokuapp.com/v1/users/${id}`, newUser, {
              headers: config,
            })
            .then((res) => {
              setUserData(res.data);
              setToggle(!toggle);
            });
        }
      };
  return (
   
      <Row>
          <Col md={3}>
              <Form>
              
               {!toggle ? (
          <>
            <Image
                src={userData.avatar}
                alt="anh"
                fluid
                rounded
                thumbnail
              />
            <Button onClick={() => handleToggle()}>Update Avatar</Button>
          </>
        ) : (
          <>
            <img className="img-avatar" src={avatarImg} alt="anh" />
            <input
              type="file"
              placeholder="Pick picture!"
              ref={ref}
              onChange={(e) => handleChangeImg(e)}
            />
            <button onClick={() => handleSubmit()}>Update</button>
            <button onClick={() => handleToggle()}>Exist</button>
          </>
        )}
               <Form.Group controlId='name'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={userData.username}
             
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={userData.email}
             
            ></Form.Control>
          </Form.Group>
        <Form.Group className='py-3' >
            {userData.isEmailVerified ? <h1> Email Verified </h1> : (
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
