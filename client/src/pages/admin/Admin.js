import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.js';

function Admin() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('https://mintportalentry.onrender.com/admind/dashboard') // Update the route path here
      .then((result) => {
        console.log(result)
        if (result.data === 'ok') {
          setMessage('Welcome to the admin dashboard.');
        } else {
          navigate('/login');
        }
      })
      .catch((error) => {
        console.log(error);
        navigate('/login'); // Handle errors by redirecting to the login page
      });
  }, [navigate]);

  return (
    <div>
      <div className="container mt-5" >
        <div className="row">
          <div
            className="col-xs-12 col-md-3 post-links-container mt-2"
            style={{ overflow: "hidden" }}
          >
            <Sidebar/>
          </div>
          <div className="col-xs-12 col-md-2"></div>
          <div className="col-xs-12 col-md-7 mb-5"  style={{ height: "400px" }}>
            <br />
            <h1 style={{color:"orange"}}>Admin Home</h1>
            <h3>{message}</h3> <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
