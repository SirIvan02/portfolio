import Homepage from "./components/Homepage";
import { Analytics } from '@vercel/analytics/react';
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Analytics />
      <Homepage />
      <AboutMe />
      <Services />
      <ContactMe/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 320" className='absolute'>
            <path fill="#222222" fill-opacity="1" d="M0,32L48,58.7C96,85,192,139,288,144C384,149,480,107,576,96C672,85,768,107,864,128C960,149,1056,171,1152,160C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      
      <Footer />
    </div>
  );
}

export default App;
