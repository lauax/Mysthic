import backgroundimage2 from '../images/mysthic.jpg';
import backgroundimage from '../images/mysticgrove.jpg';
import './Media.css';

const MainSurface = () => {
  return (
    <div style={{ width: '100vw', display: 'flex' }}>
      <img className='background-image'
        src={backgroundimage}
        alt=""
        style={{ width: '50vw', height:'100vh' }}
      />
      <img className='background-image'
        src={backgroundimage2}
        alt=""
        style={{ width: '50vw', height:'100vh' }}
      />
    </div>
  );
};

export default MainSurface;
