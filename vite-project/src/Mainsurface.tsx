import React from 'react';
import backgroundimage2 from '../images/mysthic.jpg';
import backgroundimage from '../images/mysticgrove.jpg';

const MainSurface: React.FC = () => {
  const containerStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  };

  const imageStyle = {
    width: '50%',
    height: '100vh',
    backgroundImage: `url(${backgroundimage})`,
    backgroundSize: 'cover',
  };

  const image2Style = {
    width: '50%',
    height: '100vh',
    backgroundImage: `url(${backgroundimage2})`,
    backgroundSize: 'cover',
    
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
