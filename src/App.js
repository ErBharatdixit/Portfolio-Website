
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Skills from './containers/skill';
import Resume from './containers/resume';
import Navbar from './component/navbar';

function App() {
     

      return (
            <div className="App">
                  {/* Particles js */}

                  {/* navbar */}
                  <Navbar />

                  {/* main page content */}
                  <div className="App_main-page-content">
                        <Routes>
                              <Route index path='/' element={<Home />} />
                              <Route path='/about' element={<About />} />
                              <Route path='/contact' element={<Contact />} />
                              <Route path='/portfolio' element={<Portfolio />} />
                              <Route path='/skills' element={<Skills />} />
                              <Route path='/resume' element={<Resume />} />
                        </Routes>
                  </div>

            </div>
      );
}

export default App;