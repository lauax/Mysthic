import React from 'react';
import backgroundimage2 from '../images/mysthic.jpg';
import backgroundimage from '../images/mysticgrove.jpg';

const MainSurface: React.FC = () => {
  const containerStyle = {
    display: 'flex',
    margin:'0',
    padding:'0',
    width:'100%',
    height: '99vh',
  };

  const imageStyle = {
    flex: 1,
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    margin: '0',
    
  };
  
  const image2Style = {
    flex: 1,
    backgroundImage: `url(${backgroundimage2})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    margin: '0',
  };

  return (
    <main className="main">
      <div className="background-picture" style={containerStyle}>
        <div className="background-image" style={imageStyle}></div>
        <div className="background-image" style={image2Style}></div>
      </div>
    </main>
  );
};

export default MainSurface;
