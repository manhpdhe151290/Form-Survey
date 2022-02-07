import React from 'react';
import { useState } from 'react';
const QuestionItem = (props) => {
    const data=props.data
    const ans=props.ans
    const findId=()=>{
      if (ans){
        const index=ans.findIndex((item)=>item.id===data.id)
        if (index===-1){
         
          return ''
        }
        console.log(index)
        return ans[index].correctanswer
      }
      return ''

    }
    const answer=findId()
    const handleChange=(e,id,question)=>{
      // setAnswer(e.target.value)
      props.handleChangeAns(question,e.target.value,id)
   }
  return (
      <div className='question-item-container'>
          <h2>{data.question}</h2>
          <div className='group' >

          <div className='input-group' >
              <input type="radio" checked={answer===data.answer1} onChange={(e)=>handleChange(e,data.id,data.question)} name={data.id} value={data.answer1}  />
              <label htmlFor={data.id}>{data.answer1}</label>
            </div>
            <div className='input-group'>
              <input type="radio" checked={answer===data.answer2} name={data.id}  onChange={(e)=>handleChange(e,data.id,data.question)} value={data.answer2}  />
              <label htmlFor={data.id}>{data.answer2}</label>
            </div>
            <div className='input-group'>
              <input type="radio" checked={answer===data.answer3} name={data.id} onChange={(e)=>handleChange(e,data.id,data.question)} value={data.answer3}  />
              <label htmlFor={data.id}>{data.answer3}</label>
            </div>
            <div className='input-group'>
              <input type="radio" checked={answer===data.answer4} name={data.id} onChange={(e)=>handleChange(e,data.id,data.question)} value={data.answer4}  />
              <label htmlFor={data.id}>{data.answer4}</label>
            </div>
          </div>
      </div>
  );
};

export default QuestionItem;
