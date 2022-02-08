import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { listQuestions, resultQuestion } from '../actions/questionActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Pagination from '../components/Pagination/Pagination'
import QuestionItem from '../components/QuestionItem'
const HomeScreen = () => {
  const navigate = useNavigate()

  const [answer, setAnswer] = useState([])

  const questionList = useSelector((state) => state.questionList)
  const { loading, error, questions, totalPages } = questionList
  const [page, setPage] = useState(1)
  const handleChangeAns = (question, ans, id) => {
    const output = {
      id: id,
      question: question,
      correctanswer: ans,
    }
    if (answer.length >= 1) {
      const index = answer.findIndex((item) => item.id === id)
      if (index === -1) {
        setAnswer([...answer, output])
        return
      }
      const newAnswer = [...answer]
      newAnswer[index] = output
      setAnswer(newAnswer)
      return
    }
    setAnswer([output])
  }
  let newResult = _.cloneDeep(answer)
  if (newResult.length > 0) {
    newResult = newResult.map((item, index) => {
      delete item.id

      return item
    })
  }
  const handleClick = () => {
    if (answer.length >= 1) {
      dispatch(resultQuestion(newResult))
      navigate('/user/result')
    }
    console.log('submit')
  }
  const userLogin = useSelector((state) => state.userLogin)
    const { userInfo  } = userLogin
  const dispatch = useDispatch()
  useEffect(() => {
    if(userInfo && (userInfo.user.role !== 'admin')){
      dispatch(listQuestions(page))
    }
    
  }, [dispatch,userInfo, page])
  function onHandlePageChange(page) {
    if (page <= 1) {
      setPage(1)
      return
    }
    if (page >= questions.totalPages) {
      setPage(questions.totalPages)
      return
    }
    setPage(page)
  }
  return (
    <>
      <h1>Frequently Asked Questions</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>Please login to make a survey</Message>
      ) : (
        <>
          {questions.map((q, index) => {
            return (
              <QuestionItem
                key={q.id}
                data={q}
                handleChangeAns={handleChangeAns}
                ans={answer}
              />
            )
          })}
          {totalPages === page ? (
            <button onClick={() => handleClick()}>Submit</button>
          ) : (
            ''
          )}

          <Pagination
            page={page}
            handlePage={onHandlePageChange}
            totalPages={totalPages}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
