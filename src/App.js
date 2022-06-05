
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';

import Websitefeatures from './components/websitefeatures';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Ltm from './components/Ltm';
import Lhrtomultan from './components/lhrtomultan';
import Lhrtoisl from './components/lhrtoisl'; 
import Lhrtopeshawar from './components/lhrtopeshawar';
import Bahawtolhr from './components/bahawtolhr';
import Isltolhr from './components/isltolhr';





function App() {
  return (
    <div className='app'>
    <Navbar/>
     <Routes>
     <Route  path="/" element={<Home/>} />
     <Route  path="/lhrtomuzaf" element={<Ltm/>} />
     <Route path="/lhrtomultan" element={<Lhrtomultan/>}/>
     <Route path="/lhrtoisl" element={<Lhrtoisl/>}/>
     <Route path="/lhrtopeshawar" element={<Lhrtopeshawar/>}/>
     <Route path="/bahawtolhr" element={<Bahawtolhr/>}/>
     <Route path="/isltolhr" element={<Isltolhr/>}/>
     </Routes>
     
    
    
    <Websitefeatures/>
    <Footer/>
    
    
      
     </div>
    
    

    
  );
}

export default App;
