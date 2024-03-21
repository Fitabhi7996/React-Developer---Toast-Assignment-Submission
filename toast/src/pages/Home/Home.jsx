// Home.js
import React, { useEffect, useState } from 'react';
import './Home.css';
import Toast from '../../components/Toast/Toast';

const Home = ({ setShowToast, showToast }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='home-container'>
      <div className='left-section'>
        <h1>Title Here</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Adipiscing dolor id amet sit
          sit posuere malesuada suspendisse.
        </p>
        {isMobile && showToast && (
          <div className='toast-container-mobile'>
            <Toast
              message='Message here'
              hideInfoIcon={false}
              withoutAction={false}
              withoutDivider={false}
              crossIcon={false}
              notificationIcon='information'
            />
          </div>
        )}

        <button
          className='button'
          onClick={() => {
            setShowToast(true);
            console.log('clicked');
          }}
        >
          Button
        </button>
      </div>
      <div className='right-section'>
        <div className='square'></div>
      </div>
    </div>
  );
};

export default Home;
