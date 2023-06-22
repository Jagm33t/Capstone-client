import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navhead from './components/Navhead/Navhead';
import LoginPage from './pages/LoginPage/LoginPage';
import Features from './components/Features/Features';
import HomePage from './pages/Homepage/HomePage';
import FeaturesPage from './pages/Featurespage/featuresPage';
import AboutPage from './pages/Aboutpage/AboutPage';
import SignupPage from './pages/SignupPage/SignupPage';
import ContactPage from './pages/Contactpage/ContactPage';
import AddFunds from './components/AddFunds/AddFunds';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navhead />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/features' element={<FeaturesPage />} />
          <Route path='/addfunds' element={<AddFunds />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;





