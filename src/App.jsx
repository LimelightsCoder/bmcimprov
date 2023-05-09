import { Navbar, Home, Squad, ShowDates, Highlights, Classes, BmcHistory, Contact, Footer} from './components';
import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";
import { React } from 'react';

const items = [
  { title: 'Show Dates,', Link: '/show-dates' },
  { title: ' Squad,', Link: '/squad' },
  { title: ' Classes,', Link: '/classes' },
  { title: ' History,', Link: '/bmc-history' },
  { title: ' Highlights,', Link: '/highlights' },
  { title: ' Contact', Link: '/contact' },
];

function App() {

  function HeaderView() {
    let location = useLocation();
    console.log(location.pathname);
    return <span>Path : {location.pathname}</span>
  };

  return (
    <Router>
    <div className="min-h-screen">
      <div className="gradient-bg-home">
        <Navbar items={items} />   
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/show-dates' element={<ShowDates />} />
          <Route path='/squad' element={<Squad />} />
          <Route path='/classes' element={<Classes />} />
          <Route path='/bmc-history' element={<BmcHistory />} />
          <Route path='/highlights' element={<Highlights />} />
          <Route path='/contact' element={<Contact />} />               
        </Routes>
      </div>

  </div>
  </Router>
  );
}

export default App
