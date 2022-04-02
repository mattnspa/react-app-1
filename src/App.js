import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import ErrorAlert from "./ErrorAlert";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  
  const [errorAlert, setErrorAlert] = useState(null)
  const handleError = (error) => {
    console.log(error)
    setErrorAlert(error)
  }

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={ <Home handleError={handleError}/> } />
              <Route path="/create" element={ <Create handleError={handleError} /> } />
              <Route path="/blogs/:id" element={ <BlogDetails handleError={handleError}/> } />
              <Route path="*" element={ <NotFound /> } />
            </Routes>
          </div>
          {errorAlert && <ErrorAlert error={errorAlert} handleError={handleError}/>}
        </div>
      </div>
    </Router>
  );
}

export default App;
