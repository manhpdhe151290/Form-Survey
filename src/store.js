import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userLoginReducer,userRegisterReducer  } from './reducer/userReducers';
import { questionListReducer ,questionCreateReducer , questionResultReducer ,questionListAdReducer ,QuestionDeleteReducer,QuestionUpdateReducer} from './reducer/questionReducers'
const reducer= combineReducers({
    userLogin : userLoginReducer,
  userRegister : userRegisterReducer,
  questionList : questionListReducer,
  questionCreate : questionCreateReducer,
  questionresult : questionResultReducer,
  questionAd : questionListAdReducer,
  questionDelete : QuestionDeleteReducer,
  questionUpdate : QuestionUpdateReducer
})
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const initialState = {
    user : {
      userInfo : userInfoFromStorage
    }
  };
  const middleware = [thunk]
  
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  
  export default store