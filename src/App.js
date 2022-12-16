import './App.css';
import LandingPage from './landingpage';
import ResponsiveAppBar from './components/menu'
import Services from './components/Services';
import About from './components/About';
import Appl from './components/stepper';
import Contact from './components/contact';
import Home from './components/signup';
import Signin from './components/signin';
import Signup from './components/signup';
import Blog from './components/Blog';
import Partnerus from './components/Partnerus';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
	  <div className="App">
		  
		  <ResponsiveAppBar />
		  <Routes>
			  <Route path='/' element={<LandingPage />} />
			  <Route path='Home' element={<LandingPage />} />
			  <Route path='Services' element={<Services />} />
			  <Route path='Signin' element={<Signin />} />
			  <Route path='Blog' element={<Blog />} />
			  <Route path='About' element={<About />} />
			  <Route path='Signup' element={<Signup />} />
			  <Route path='Contact' element={<Contact />} />
			  <Route path='Partnerus' element={<Partnerus/>} />
		</Routes> 
		  
		 
    </div>
  );
}

export default App;
