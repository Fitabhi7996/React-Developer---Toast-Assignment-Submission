import React, { useEffect, useState } from 'react';
import './App.css';
import Toast from './components/Toast/Toast';
import Home from './pages/Home/Home';

function App() {
  const [show, setShow] = useState(false);
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
  const showToastFor3Seconds = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  useEffect(() => {
    if (show === true) {
      showToastFor3Seconds();
    }
  }, [show]);

  return (
    <div className='App'>
      <Home setShowToast={setShow} showToast={show} />
      {show && !isMobile && (
        <div className='toast-container'>
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
    </div>
  );
}

export default App;
