import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteQuestion, updateQuestion } from '../actions/questionActions';
import Backdrop from './Test/BackDrop';
import Modal from './Test/Modal';
const QuestionAdItem = (props) => {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  const dispatch = useDispatch()
  const data=props.data
  const [question, setQuestion] = useState('')
  const [answer1, setAnswer1] = useState('')
  const [answer2, setAnswer2] = useState('')
  const [answer3, setAnswer3] = useState('')
  const [answer4, setAnswer4] = useState('')
  const [correctanswer, setCorrectanswer] = useState('')
  
  const handleDelete = (id) => {
    
        dispatch(deleteQuestion(id));
        setShowModal(false);
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
        <div><button onClick={()=>handleUpdate(data.id)} className='my-3 btn'>Update</button>
        
        <button className='btn' onClick={showModalHandler}>
          Delete
        </button>
        {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <Modal text='Are you sure?' onClose={closeModalHandler} handlerDelete={() => handleDelete(data.id)}/>}
     </div>
          

    </div>
    
    </>
  );
};

export default QuestionAdItem;