import React from 'react'

const Pagination = (props) => {
  const { page, handlePage , totalPages } = props
  const handlePageChange = (newPage) => {
    if (handlePage) {
      handlePage(newPage)
    }
  }
  return (
   <div className='btn-container text-center mt-3'>

              <button disabled={page===1} onClick={()=>handlePageChange(page-1)} >Prev</button>
              <span>{`${page}/${totalPages}`}</span>
              <button disabled={page>=totalPages} onClick={()=>handlePageChange(page+1)} >Next</button>
            </div>
  )
}

export default Pagination
