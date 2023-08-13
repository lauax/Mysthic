import backgroundimage2 from '../images/mysthic.jpg';
import backgroundimage from '../images/mysticgrove.jpg';
import './Media.css';

const MainSurface = () => {
  return (
    <div className='background-image' style={{ position: 'relative', height: '100vh', display: 'flex', objectFit:'scale-down',  }}>
      <img className='background-image'
        src={backgroundimage}
        alt=""
        style={{ width: '50vw', height: '100%', margin:'0', padding:'0' }}
      />
      <img className='background-image'
        src={backgroundimage2}
        alt=""
        style={{ width: '50vw', height: '100%', margin:'0', padding:'0'}}
      />
      <p className='introduction' style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        color: 'white', 
        textAlign: 'center',
        fontSize: '1.5vw',  
        lineHeight: '1.4',
          
         
      }}>
        Welcome to Mystic. At Mystic , we craft more than just alcoholic beverages; we create experiences that transport you to a realm of unparalleled taste, innovation, and luxury.
        <br/><br/>Our commitment to excellence and a passion for pushing boundaries have culminated in a collection of spirits that redefine the art of indulgence. Picture a world where every sip is an exploration, every moment a celebration.
        <br/><br/>Mystic Spirits invites you to embark on a journey of discovery, where each bottle is a testament to our dedication to quality, authenticity, and creativity. From the very first pour, you'll be captivated by the depth of flavors, meticulously crafted to awaken your palate and tantalize your senses.
      </p>
    </div>
  );
};

export default MainSurface;
