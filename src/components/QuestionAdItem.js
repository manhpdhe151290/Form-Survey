import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteQuestion, updateQuestion } from '../actions/questionActions';
const QuestionAdItem = (props) => {
  const navigate = useNavigate()
  const token=props.token
  const dispatch = useDispatch()
  const questionUpdate=props.questionUpdate
  const data=props.data
  const [question, setQuestion] = useState('')
  const [answer1, setAnswer1] = useState('')
  const [answer2, setAnswer2] = useState('')
  const [answer3, setAnswer3] = useState('')
  const [answer4, setAnswer4] = useState('')
  const [correctanswer, setCorrectanswer] = useState('')
  
  const handleDelete = (id) => {
    if (window.confirm('Are you sure')) {
        dispatch(deleteQuestion(id));
    }
  }
    const handleUpdate=(id)=>{
      if (window.confirm('Are you sure')) {
        dispatch(updateQuestion(id,{question,answer1,answer2,answer3,answer4,correctanswer}));
    }
    }
  useEffect(() => {
    if(data){
      setQuestion(data.question)
      setAnswer1(data.answer1)
      setAnswer2(data.answer2)
      setAnswer3(data.answer3)
      setAnswer4(data.answer4)
      setCorrectanswer(data.correctanswer)
    }
  },[data])
   
  return (
    <>
      
        
      <div>
          <h2>question:{data.question}</h2>
          <h2>answer1 :{data.answer1}</h2>
          <h2>answer2:{data.answer2}</h2>
          <h2>answer3:{data.answer3}</h2>
          <h2>answer4:{data.answer4}</h2>
           <h2>correctanswer:{data.correctanswer}</h2>
          
      </div>
    
    <div>
        <input type="text" name="question" value={question}  onChange={(e) => setQuestion(e.target.value)}/>
        <input type="text" name="answer1" value={answer1} onChange={(e) => setAnswer1(e.target.value)}/>
        <input type="text" name="answer2" value={answer2} onChange={(e) => setAnswer2(e.target.value)}/>
        <input type="text" name="answer3" value={answer3} onChange={(e) => setAnswer3(e.target.value)}/>
        <input type="text" name="answer4" value={answer4} onChange={(e) => setAnswer4(e.target.value)}/>
        <input type="text"name="correctanswer" value={correctanswer} onChange={(e) => setCorrectanswer(e.target.value)} />
        <div><button onClick={()=>handleUpdate(data.id)} className='my-3'>Update</button>
        <button onClick={()=>handleDelete(data.id)}>Delete</button></div>
          

    </div>
    
    </>
  );
};

export default QuestionAdItem;