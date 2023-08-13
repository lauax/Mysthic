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
    <div className='productcard' style={{display:'flex', width:'97vw', justifyContent:'space-between', alignItems:'center', textAlign:'center'}}>
        <img style={{width:'25%'}} src={imageSrc} alt="images" />
        <div style={{width:'40%'}}>
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
        <div style={{width:'20%'}}>
            <p>{price}</p>
            <button>Add to cart</button>
        </div>
    </div>
  );
};

export default ProductCard;
