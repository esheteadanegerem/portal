import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await axios.post('https://mintportalentry.onrender.com/authlog/logout');
        console.log('Response from logout:', response.data);

        if (response.data === 'tokendeleted') {
          navigate('/login');
        } else {
          console.log('Unable to logout. Check the server response.');
        }
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    logoutUser();
  }, [navigate]);

  return <div>Logout component content</div>;
};

export default Logout;
