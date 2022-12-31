import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursePage from './pages/CoursePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';



function App() {
  return (
      <div className='App'>
          <Header />
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='contact' element={<ContactPage />} />
              <Route path='about' element={<AboutPage />} />
              <Route path='course' element={<CoursePage />} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;