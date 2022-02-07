import React, { useState , useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createQuestion } from '../actions/questionActions'
import { listAdQuestions } from '../actions/questionActions'
import QuestionAdItem from '../components/QuestionAdItem'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductListScreen = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1)
    const [question, setQuestion] = useState('')
  const [answer1, setAnswer1] = useState('')
  const [answer2, setAnswer2] = useState('')
  const [answer3, setAnswer3] = useState('')
  const [answer4, setAnswer4] = useState('')
  const [correctanswer, setCorrectanswer] = useState('')
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [toggle,setToggle]=useState(false)
  const handleToggle=()=>{
    setToggle(!toggle)
}
  // const questionCreate = useSelector((state) => state.questionCreate)
  // const { loading:loadingCreate, error:errorCreate, successCreate, question:createdProduct } = questionCreate
const token=userInfo?userInfo.tokens.access.token:''
  const questionAd = useSelector((state) => state.questionAd)
  const { loading, error, questions, totalPages } = questionAd
  useEffect(() => {
    dispatch(listAdQuestions(page))
  }, [dispatch, page])
  const [questionId,setQuestionId]=useState('')
  const [questionUpdate,setQuestionUpdate]=useState('')
  const handleQuestionUpdate=(id)=>{
    setQuestionUpdate(id)
}
const handleChangeQuestionId=(id)=>{
    setQuestionId(id)
}
  const handlePrev=()=>{
    if (page<=1){
        setPage(1)
        return
    }
    setPage(page-1)
}
const handleNext=()=>{
    if (page>=totalPages){
        setPage(totalPages)
        return
    }
    setPage(page+1)
}
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createQuestion({ 
      question,answer1,answer2,answer3,answer4,correctanswer
    }));
    setQuestion('')
    setAnswer1('')
    setAnswer2('')
    setAnswer3('')
    setAnswer4('')
    setCorrectanswer('')
    alert('Created Question Successfully')
  }
  return (
    <>
      <Row className='align-items-center'>
        
          <h1>Questions</h1>
          
       <Col md={6}>
       <Button  className='my-3' onClick={handleToggle}>
            <i className='fas fa-plus'></i> Open Create Question
          </Button>
        {toggle && <Form onSubmit={submitHandler}>
        <Form.Group controlId='question'>
          <Form.Label>Question</Form.Label>
          <Form.Control
            type='question'
            placeholder='Enter Question'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='answer1'>
          <Form.Label>Answer1</Form.Label>
          <Form.Control
            type='answer1'
            placeholder='Enter answer1 :'
            value={answer1}
            onChange={(e) => setAnswer1(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='answer2'>
          <Form.Label>Answer2</Form.Label>
          <Form.Control
            type='answer2'
            placeholder='Enter answer2 :'
            value={answer2}
            onChange={(e) => setAnswer2(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='answer3'>
          <Form.Label>Answer3</Form.Label>
          <Form.Control
            type='answer3'
            placeholder='Enter answer3 :'
            value={answer3}
            onChange={(e) => setAnswer3(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='answer4'>
          <Form.Label>Answer4</Form.Label>
          <Form.Control
            type='answer4'
            placeholder='Enter answer4 :'
            value={answer4}
            onChange={(e) => setAnswer4(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='correctAnswer'>
          <Form.Label>correctAnswer</Form.Label>
          <Form.Control
            type='correctAnswer'
            placeholder='Enter correctAnswer :'
            value={correctanswer}
            onChange={(e) => setCorrectanswer(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        <Button type='submit' className='my-3'>
            <i className='fas fa-plus'></i> Create Product
          </Button>
          
      </Form>}
      </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>Please login to make a survey</Message>
      ) : (
        <>
      {

            questionAd?questions.map((item,index)=>{
                return (
                    <QuestionAdItem 
                        data={item} 
                        key={index}
                        token={userInfo&&token?token:''} 
                        questionId={questionId}
                        questionUpdate={questionUpdate}
                        handleChangeQuestionId={handleChangeQuestionId}
                        handleQuestionUpdate={handleQuestionUpdate}
                    />
                    
                )
            }):''
        }
         <div className='button-pagination'>
            <button disabled={page<=1} onClick={()=>handlePrev()}>prev</button>
            <span>{`${page}/${totalPages}`}</span>
            <button disabled={page>=totalPages} onClick={()=>handleNext()}>Next</button>
        </div>
        </>
     )}
        </>
  )
}

export default ProductListScreen