import React from 'react';
import './Media.css';
interface ProductCardProps {
  imageSrc: string;
  description: string;
  price: number;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, description, price }) => {
  return (
    <div className="product-card" style={{ width: '99vw', display: 'flex', height:'40vh'}}>
      <div className="product-image" style={{ width: '25%', padding: '10px' }}>
        <img src={imageSrc} alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="product-description" style={{ width: '75%', padding: '10px', marginTop:'1rem'  }}>
        <h2>{title}</h2>
        <p className="description-text" style={{width:'50%', margin:'0'}}>{description}</p>
        </div>
        <div className='product-addToCart' style={{margin:'auto', marginRight:'5rem', marginTop:'4rem'}}>
        <p style={{paddingLeft:'2rem',}}>${price.toFixed(2)}</p>
        <button>Add to Cart</button>
        </div>
    </div>
  );
};

export default ProductCard;
