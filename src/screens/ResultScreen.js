import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader'
import Message from '../components/Message'
const ResultScreen = () => {
        const result = useSelector(state => state.questionresult)
        const { loading, error, results } = result
        const getScore=()=>{
            let score
            if (results){
    
                 score=results.filter((item)=>item.result===true)
            }
            return score.length
        }
  return (
    <>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>Please login to make a survey</Message>
    ) : (
      <div className='result-container'>
  
    <h2>Your Score is:{getScore()}</h2>
   <h2>Question is aswered:{results.length}</h2>
   <h2>Incorrect Answer is:{results.length-getScore()}</h2>
    </div>
    )}
     </>
  )
};

export default ResultScreen;
