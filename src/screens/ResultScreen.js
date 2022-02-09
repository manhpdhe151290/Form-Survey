import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
      <>
       <Link className='btn btn-dark my-3' to='/home'>
        Go Back
      </Link>
      <div className='result-container text-center'>
    <h1 >You completed Survey!</h1>
    <h2>Your Score is: {getScore()}</h2>
   <h2>Question is aswered: {results.length}</h2>
   <h2>Incorrect Answer is: {results.length-getScore()}</h2>
    </div>
    </>
    )}
     </>
  )
};

export default ResultScreen;
