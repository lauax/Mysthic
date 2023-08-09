import React from 'react';
import logo from '../images/MysticFarmandDistilleryLogo.png';
import cart from '../images/cart.jpg';
import profile from '../images/profil.jpg';

const Header: React.FC = () => {
  const headerStyle = {
    backgroundColor: 'black',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  };

  const logoStyle = {
    width: '125px',
    height: '100px',
    padding: '0',
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    width: '35px',
    height: '35px',
    paddingRight:'20px'
  };

  return (
    <header className="header" style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <div className="header-icons">
        <div className="cart-icon" style={iconContainerStyle}>
          <img src={cart} alt="Cart" style={iconStyle} />
          <img src={profile} alt="Profile" style={iconStyle} />
        </div>
      </div>
    </header>
  );
};

export default Header;
