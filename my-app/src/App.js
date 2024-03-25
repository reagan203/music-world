// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Kenyan from './components/kenyan';
import HipHop from './components/hiphop';
import Drill from './components/drill';
import Gospel from './components/gospel';
import Dancehall from './components/dancehall';
// import Header from './components/header';
// import Footer from './components/footer';

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kenyan" element={<Kenyan />} />
          <Route path="/hiphop" element={<HipHop />} />
          <Route path="/drill" element={<Drill />} />
          <Route path="/gospel" element={<Gospel />} />
          <Route path="/dancehall" element={<Dancehall />} />
        </Routes>
        {/* <Footer/> */}
       </Router> 
    </div>
  );
}

export default App;
