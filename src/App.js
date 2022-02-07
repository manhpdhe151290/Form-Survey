import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from '../src/screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import IntroScreen from './screens/IntroScreen/IntroScreen';
import QuestionListScreen from './screens/QuestionListScreen';
import ResultScreen from './screens/ResultScreen';
function App() {
  return (
   <Router>
     <Header/>
     <main className='py-3'>
        <Container>
     <Routes>
     <Route path='/' element={<HomeScreen />} />
     <Route path='/login' element={<LoginScreen />} />
     <Route path='/register' element={<RegisterScreen />} />
     <Route path='/profile' element={<ProfileScreen />} />
     <Route path='/intro' element={<IntroScreen />} />
     <Route path='/admin/questionlist' element={<QuestionListScreen />} />
     <Route path='/user/result' element={<ResultScreen />} />




     </Routes>

      </Container>
      </main>
     <Footer/>
   </Router>
  );
}

export default App;
