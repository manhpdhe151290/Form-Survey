import { CREATE_QUESTIONS_FAIL, CREATE_QUESTIONS_REQUEST, CREATE_QUESTIONS_RESET, CREATE_QUESTIONS_SUCCESS, DELETE_QUESTIONS_FAIL, DELETE_QUESTIONS_REQUEST, DELETE_QUESTIONS_SUCCESS, LISTADMIN_QUESTIONS_FAIL, LISTADMIN_QUESTIONS_REQUEST, LISTADMIN_QUESTIONS_SUCCESS, RESULT_QUESTIONS_FAIL, RESULT_QUESTIONS_REQUEST, RESULT_QUESTIONS_SUCCESS, UPDATE_QUESTIONS_FAIL, UPDATE_QUESTIONS_REQUEST, UPDATE_QUESTIONS_SUCCESS } from '../constants/questionConstants'
import { LIST_QUESTIONS_FAIL, LIST_QUESTIONS_REQUEST, LIST_QUESTIONS_SUCCESS } from '../constants/questionConstants'
 export const questionListReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case LIST_QUESTIONS_REQUEST:
      return { loading: true, questions: [] }
    case LIST_QUESTIONS_SUCCESS:
      return {
        loading: false,
        questions: action.payload.results,
        page : action.payload.page,
        limit : action.payload.limit,
        totalPages : 2,
        totalResults : action.payload.totalResults
      }
    case LIST_QUESTIONS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const questionCreateReducer = (state = {  }, action) => {
  switch (action.type) {
    case CREATE_QUESTIONS_REQUEST:
      return { loading: true, questions: [] }
    case CREATE_QUESTIONS_SUCCESS:
      return {
        loading: false,
        success : true,
        question: action.payload,
      }
    case CREATE_QUESTIONS_FAIL:
      return { loading: false, error: action.payload }
      case CREATE_QUESTIONS_RESET:
        return {}
    default:
      return state
  }
}

export const questionResultReducer = (state = {  }, action) => {
  switch (action.type) {
    case RESULT_QUESTIONS_REQUEST:
      return { loading: true, results: [] }
    case RESULT_QUESTIONS_SUCCESS:
      return {
        loading: false,
        success : true,
        results: action.payload,
      }
    case RESULT_QUESTIONS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const questionListAdReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case LISTADMIN_QUESTIONS_REQUEST:
      return { loading: true, questions: [] }
    case LISTADMIN_QUESTIONS_SUCCESS:
      return {
        loading: false,
        questions: action.payload.results,
        page : action.payload.page,
        limit : action.payload.limit,
        totalPages : 2,
        totalResults : action.payload.totalResults
      }
    case LISTADMIN_QUESTIONS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const QuestionDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_QUESTIONS_REQUEST:
      return { loading: true }
    case DELETE_QUESTIONS_SUCCESS:
      return { loading: false, success: true }
    case DELETE_QUESTIONS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const QuestionUpdateReducer = (state = { question : {}}, action) => {
  switch (action.type) {
    case UPDATE_QUESTIONS_REQUEST:
      return { loading: true }
    case UPDATE_QUESTIONS_SUCCESS:
      return { loading: false, success: true, question: action.payload }
    case UPDATE_QUESTIONS_FAIL:
      return { loading: false, error: action.payload }
    // case UPDATE_QUESTIONS_RESET:
    //   return { product : {}}
    default:
      return state
  }
}