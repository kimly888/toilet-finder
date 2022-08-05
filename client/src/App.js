import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles/reset.css';
import './styles/base.css';
import Header from './components/layout/Header';
import TopArea  from './components/layout/TopArea';
import MapArea from './components/layout/MapArea';
import DetailArea from './components/layout/DetailArea';

function App() {
  const [message, setMessage] = useState('');
  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    const getTest = async () => {
      await axios.get('/test').then((res) => {
        console.log(res.data.message);
        setMessage(res.data.message);
      });
    };
    getTest();
  }, []);

  return (
    <>
      <Header />
      <TopArea userLocation={userLocation} setUserLocation={setUserLocation} /> 
      {/* <MapArea /> */}
      {/* <DetailArea /> */}
      <div>
        {message ? message : ''}
      </div>
    </>
  );
}

export default App;
